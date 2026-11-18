
/* =========================================
   1. GET HTML ELEMENTS
========================================= */

// Chat form
const chatForm = document.getElementById("chat-form");

// User input field
const userInput = document.getElementById("user-input");

// Send button
const sendButton = document.getElementById("send-button");

// Chat messages container
const chatMessages = document.getElementById("chat-messages");

// Welcome screen
const welcomeScreen = document.getElementById("welcome-screen");

// Loading indicator
const loadingIndicator = document.getElementById("loading-indicator");

// Clear chat button
const clearButton = document.getElementById("clear-chat");


/* =========================================
   2. CONVERSATION HISTORY
========================================= */

// Stores messages during the current session.
// This is not permanently saved.

let conversationHistory = [];

// Prevents multiple simultaneous requests
let isLoading = false;


/* =========================================
   3. DISPLAY CHAT MESSAGES
========================================= */

function displayMessage(role, content, isError = false) {

    // Create the main message container
    const messageElement = document.createElement("div");

    messageElement.classList.add("message");

    if (role === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("ai-message");
    }

    // Create avatar
    const avatar = document.createElement("div");

    avatar.classList.add("message-avatar");

    avatar.textContent = role === "user" ? "👤" : "✦";

    // Create message content container
    const messageContent = document.createElement("div");

    messageContent.classList.add("message-content");

    // Create sender name
    const messageName = document.createElement("div");

    messageName.classList.add("message-name");

    messageName.textContent =
        role === "user" ? "You" : "AI Assistant";

    // Create message bubble
    const messageBubble = document.createElement("div");

    messageBubble.classList.add("message-bubble");

    // Use textContent to prevent HTML injection
    messageBubble.textContent = content;

    if (isError) {
        messageBubble.style.borderColor = "#ef4444";
    }

    // Arrange message elements
    messageContent.appendChild(messageName);
    messageContent.appendChild(messageBubble);

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageContent);

    // Add message to chat
    chatMessages.appendChild(messageElement);

    // Scroll to the latest message
    scrollToBottom();
}


/* =========================================
   4. AUTOMATIC SCROLLING
========================================= */

function scrollToBottom() {

    const chatArea = document.querySelector(".chat-area");

    chatArea.scrollTop = chatArea.scrollHeight;
}


/* =========================================
   5. LOADING INDICATOR
========================================= */

function setLoading(loading) {

    isLoading = loading;

    // Show or hide loading animation
    loadingIndicator.hidden = !loading;

    // Disable input while AI is responding
    userInput.disabled = loading;

    sendButton.disabled = loading;

    // Change button text
    sendButton.querySelector("span:first-child").textContent =
        loading ? "Wait..." : "Send";

    // Scroll to loading indicator
    scrollToBottom();

    if (!loading) {
        userInput.focus();
    }
}


/* =========================================
   6. SEND MESSAGE TO BACKEND
========================================= */

async function sendMessage(message) {

    if (isLoading || !message.trim()) {
        return;
    }

    // Hide welcome screen
    welcomeScreen.hidden = true;

    // Display user message
    displayMessage("user", message);

    // Add user message to conversation history
    conversationHistory.push({
        role: "user",
        content: message
    });

    // Keep the latest 20 messages for the backend
    const messagesToSend = conversationHistory.slice(-20);

    // Show loading animation
    setLoading(true);

    try {

        // Send request to Vercel backend
        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                messages: messagesToSend
            })

        });

        // Read backend response
        const data = await response.json();

        // Check for backend errors
        if (!response.ok) {

            throw new Error(
                data.error || "Unable to get an AI response."
            );

        }

        // Check whether AI returned a valid answer
        if (
            typeof data.reply !== "string" ||
            !data.reply.trim()
        ) {
            throw new Error("The AI returned an empty response.");
        }

        // Display AI response
        displayMessage("assistant", data.reply);

        // Add AI response to conversation history
        conversationHistory.push({
            role: "assistant",
            content: data.reply
        });

        // Keep conversation history within the backend limit
        conversationHistory = conversationHistory.slice(-20);

    }

    catch (error) {

        console.error("Chatbot error:", error);

        // Remove failed user request from history
        // so it is not sent again automatically
        conversationHistory.pop();

        // Display error message
        displayMessage(
            "assistant",
            "Sorry! " + error.message +
            " Please check your connection and try again.",
            true
        );

    }

    finally {

        // Hide loading animation
        setLoading(false);

    }
}


/* =========================================
   7. HANDLE FORM SUBMISSION
========================================= */

chatForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    if (isLoading) {
        return;
    }

    // Get user message
    const message = userInput.value.trim();

    // Do nothing if input is empty
    if (!message) {
        return;
    }

    // Clear input field
    userInput.value = "";

    // Send message
    sendMessage(message);

});


/* =========================================
   8. ENTER KEY SUPPORT
========================================= */

// The form automatically submits when Enter is pressed.
// Shift + Enter is not needed because this is a single-line input.


/* =========================================
   9. CLEAR CHAT
========================================= */

clearButton.addEventListener("click", function () {

    if (isLoading) {
        return;
    }

    // Remove all displayed messages
    chatMessages.innerHTML = "";

    // Clear conversation history
    conversationHistory = [];

    // Show welcome screen again
    welcomeScreen.hidden = false;

    // Clear input
    userInput.value = "";

    // Focus input
    userInput.focus();

});


/* =========================================
   10. SUGGESTED PROMPTS
========================================= */

const suggestionButtons = document.querySelectorAll(".suggestion");

suggestionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (isLoading) {
            return;
        }

        // Get suggested message
        const message = button.dataset.message;

        // Put message in input field
        userInput.value = message;

        // Submit the form automatically
        chatForm.requestSubmit();

    });

});


/* =========================================
   11. INITIAL SETUP
========================================= */

// Focus on input when website loads
userInput.focus();

console.log("My First AI Chatbot is ready!");
