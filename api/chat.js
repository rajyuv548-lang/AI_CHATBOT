
export default async function handler(req, res) {

    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        // Get Groq API key from Vercel environment variables
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "GROQ_API_KEY environment variable is missing."
            });
        }

        // Get conversation messages from frontend
        const { messages } = req.body || {};

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                error: "Please provide valid chat messages."
            });
        }

        // Prepare messages for Groq
        const chatMessages = [
            {
                role: "system",
                content: "You are a helpful, friendly AI assistant. Give clear and useful answers."
            },
            ...messages.map(message => ({
                role: message.role,
                content: message.content
            }))
        ];

        // Send request to Groq API
        const groqResponse = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },

                body: JSON.stringify({
                    model: "openai/gpt-oss-20b",
                    messages: chatMessages,
                    max_completion_tokens: 1024,
                    temperature: 0.7
                })
            }
        );

        const result = await groqResponse.json();

        // Handle Groq API errors
        if (!groqResponse.ok) {
            console.error("Groq API error:", result);

            return res.status(groqResponse.status).json({
                error: result.error?.message || "Groq API request failed."
            });
        }

        // Extract AI response
        const reply = result.choices?.[0]?.message?.content;

        if (typeof reply !== "string" || !reply.trim()) {
            return res.status(502).json({
                error: "Groq returned an empty response."
            });
        }

        // Send answer back to frontend
        return res.status(200).json({
            reply: reply
        });

    } catch (error) {

        console.error("Backend error:", error);

        return res.status(500).json({
            error: "A server error occurred while generating the response."
        });

    }
}
