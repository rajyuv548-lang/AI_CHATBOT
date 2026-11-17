
# My First AI Chatbot 🤖

A beginner-friendly AI chatbot built using HTML, CSS,
Vanilla JavaScript, Node.js, Groq API and Vercel.

This project helps students understand how to build
a simple AI-powered web application from scratch.

## Features

- Clean and responsive chatbot interface.
- AI-generated responses using Groq API.
- Conversation history during the current session.
- User and AI message separation.
- Enter key support.
- Loading animation.
- Error handling.
- Clear Chat functionality.
- Secure API key management.

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript
- Node.js
- Groq API
- Vercel
- Git and GitHub

## Project Structure

```text
my-first-chatbot/
│
├── api/
│   └── chat.js
│
├── src/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── docs/
│   └── project-notes.md
│
├── index.html
├── package.json
├── .gitignore
├── .env.local
├── .env.example
└── README.md
```

## Prerequisites

Before starting, install:

1. Node.js (LTS version).
2. Git.
3. Visual Studio Code.
4. A Groq account.
5. A GitHub account.
6. A Vercel account.

## Installation

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the project folder

```bash
cd my-first-chatbot
```

### Step 3: Install dependencies

```bash
npm install
```

This installs the Vercel CLI required to run the project.

## Groq API Configuration

### Step 1: Create a Groq account

Visit:

https://console.groq.com/

### Step 2: Generate an API key

Visit:

https://console.groq.com/keys

Create and copy your API key.

### Step 3: Create .env.local

Create a file named `.env.local` in the root
directory of the project.

Add:

```env
GROQ_API_KEY=your_actual_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-20b
```

Replace the placeholder with your actual API key.

IMPORTANT: Never upload your actual API key to GitHub.

The `.env.example` file is provided as a template.

## Run Locally

Start the development server:

```bash
npm run dev
```

Vercel will provide a local development URL,
usually:

http://localhost:3000

Open this address in your browser.

Test the chatbot by entering a question.

## Deployment Using Vercel

### Step 1: Upload your project to GitHub

Initialize Git, commit your files and push
the repository to GitHub.

### Step 2: Open Vercel

Visit:

https://vercel.com/

Sign in using your GitHub account.

### Step 3: Import your repository

Select Add New Project and import your
My First AI Chatbot GitHub repository.

### Step 4: Configure environment variables

Open the project's Environment Variables settings.

Add:

Name: GROQ_API_KEY

Value: Your actual Groq API key.

Add another variable:

Name: GROQ_MODEL

Value: openai/gpt-oss-20b

Select the environments where you want
these variables available.

### Step 5: Deploy

Click Deploy.

Vercel will build and deploy your application.

Once deployment finishes, Vercel provides
a public website URL.

## Important Security Notes

- Never expose your Groq API key in frontend JavaScript.
- Never commit `.env.local` to GitHub.
- Keep your API key private.
- Do not share your API key publicly.

## Project Documentation

For more information about the project architecture,
folders and files, read:

`docs/project-notes.md`

## Author

My First AI Chatbot

## License

This project is created for educational purposes.
