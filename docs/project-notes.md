
# My First AI Chatbot - Project Notes

## 1. Introduction

My First AI Chatbot is a beginner-friendly web application
that allows users to communicate with an Artificial
Intelligence assistant.

The chatbot uses HTML, CSS and JavaScript for its frontend,
Node.js for its backend and Groq API to generate AI responses.

The application provides a simple chat interface where
users can type questions and receive intelligent responses.

## 2. Project Objectives

The main objectives of this project are:

1. To understand basic frontend web development.
2. To learn how HTML creates webpage structure.
3. To understand CSS styling and responsive design.
4. To learn JavaScript and event handling.
5. To understand communication between frontend and backend.
6. To integrate an external AI API.
7. To understand environment variables and API security.
8. To learn how to deploy a web application using Vercel.

## 3. Technologies Used

### HTML
HTML is used to create the structure of the chatbot,
including headings, messages, buttons and input fields.

### CSS
CSS is used to design the chatbot interface.
It controls colours, layouts, spacing and animations.

### JavaScript
JavaScript handles user interactions, sends messages
to the backend and displays AI-generated responses.

### Node.js
Node.js runs the backend code and handles requests
from the frontend.

### Groq API
Groq API provides AI-powered responses using a
large language model.

### Vercel
Vercel hosts the frontend and backend serverless
function and makes the application available online.

### Git and GitHub
Git tracks changes in the project, while GitHub
stores the project's source code online.

## 4. Project Architecture

The project follows a simple frontend-backend architecture.

Step 1: The user enters a message in the chatbot.

Step 2: JavaScript collects the message.

Step 3: JavaScript sends a POST request to /api/chat.

Step 4: The Node.js backend receives the request.

Step 5: The backend reads the Groq API key from
environment variables.

Step 6: The backend sends the conversation to Groq API.

Step 7: Groq generates an AI response.

Step 8: The backend returns the response in JSON format.

Step 9: JavaScript displays the response in the chatbot.

## 5. Folder Structure

### api/

This folder contains backend API functions.

- chat.js: Handles chatbot requests and communicates
  with Groq API.

### src/

This folder contains frontend resources.

#### css/

- style.css: Contains the complete styling of the chatbot.

#### js/

- script.js: Handles messages, conversation history,
  API requests, loading indicators and errors.

### docs/

This folder contains project documentation.

- project-notes.md: Explains the project architecture
  and the purpose of its files.

## 6. Root Files

### index.html

The main webpage of the application.
It contains the chatbot heading, welcome screen,
message area and input form.

### package.json

Contains project information, scripts and development
dependencies required by Node.js.

### .gitignore

Prevents unnecessary and sensitive files from being
uploaded to GitHub.

### .env.local

Stores the actual Groq API key and model configuration
for local development.

### .env.example

Provides an example of the environment variables
required to configure the project.

### README.md

Contains installation instructions, project information
and deployment guidelines.

## 7. API Integration

The chatbot communicates with the official Groq
Chat Completions API.

API endpoint:

https://api.groq.com/openai/v1/chat/completions

The backend uses JavaScript fetch() to send an HTTP
POST request.

The request contains:

- AI model name
- Conversation messages
- Authentication using the API key

Groq processes the request and returns an AI-generated
response.

The backend extracts the response and sends it
to the frontend as JSON.

## 8. Security

The Groq API key is stored in an environment variable.

The key is accessed using:

process.env.GROQ_API_KEY

The API key is never included in frontend JavaScript.

The .gitignore file prevents .env.local from being
uploaded to GitHub.

The backend also validates incoming messages
before sending them to the AI service.

## 9. Main Features

1. Simple and responsive chatbot interface.
2. User and AI message separation.
3. AI-generated responses.
4. Conversation history during the current session.
5. Enter key support for sending messages.
6. Loading animation while waiting for AI.
7. Error handling.
8. Clear Chat functionality.
9. Suggested prompts.
10. Secure API key management.

## 10. Deployment

The application can be deployed using Vercel.

The project source code is uploaded to GitHub.
Vercel connects to the GitHub repository and deploys
the frontend and backend.

The Groq API key must be configured separately
in Vercel environment variables.

## 11. Conclusion

My First AI Chatbot demonstrates how basic web
technologies can be combined with Artificial Intelligence.

Through this project, students can understand frontend
development, backend programming, API integration,
environment variables, version control and deployment.

It provides a practical introduction to building
AI-powered web applications.
