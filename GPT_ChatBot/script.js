import { OpenAI, Configuration, OpenAIApi  } from "openai";
import { config } from "dotenv";
//import { Configuration, OpenAIApi } from "openai";

////////////////////////// 1.0 - Basic Chatbot Init AI //////////////////////////////////////
// #1- TO CREATE PACKAGE.JSON: npm init -y
// #2- TO DEPENDENCIES ENV: nmp i dotenv
// #3- TO DEPENDENCIES: npm install openai
// #4- SET JSON SCRIPT IN [PACKAGE.JSON]: change test: "echo ..." to dev "node script.js"
// #5- SET ENV IN [PACKAGE.JSON]: ADD "type" : "module" to the top of the JSON

// #5 - TO RUN: [TERMINAL] npm run dev
// #3- TO POST ONLINE: ngrok http 3000
// --> INIT [dotenv] by calling the config() function
// SWITCH body[model] TO "gpt-4o" FOR BETTER RESPONSES or "gpt-3.5-turbo" for cheaper responses


// *INITIALIZE THE OPENAI API WITH THE API KEY USING THE CONFIGURATION FUNCTION FROM OPENAI
const api_key = process.env.API_KEY;
const OPEN_AI = new OpenAIApi(new Configuration({ apiKey: api_key }));


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o",
  });

  console.log(completion.choices[0]);
}



////////////////////////// 1.0 - Basic Chatbot DOM / DATA-UI PERSISTENCE //////////////////////////
// *initialize the function "init" when the page completely loads, then calls a listener for the
// *send button and the message input
// *When the send button is clicked, it calls the sendMessage function
// *When the user presses the [Enter] key, it calls the sendMessage function
// *The sendMessage function gets the message from the input field
// *If the message is empty, it returns
// *Calls the IFACEmsgUpdater function to display the user message
document.addEventListener('DOMContentLoaded', () => {

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', parseMsg);
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            parseMsg();
        }
    });

    /* Function to send the message
        * Get the message from the input field
        * If the message is empty, return
        * Call the append function to display the user message
        * Clear the input field
    * */

    function parseMsg() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        // Function updates the chat interface with the user message
        IFACE_msgUpdater('user', messageText);
        messageInput.value = '';

        // Simulate bot response after 1 second
        setTimeout(() => {
            IFACE_msgUpdater('bot', getBotResponse(messageText));
        }, 1000);
    }

    // Function to update the chat interface with the message passed from parseMsg()
    function IFACE_msgUpdater(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Basic bot response logic (can be improved)
        const responses = {
            'hello': 'Hello! How can I help you today?',
            'hi': 'Hi there! What can I do for you?',
            'how are you': 'I am just a bot, but I am doing great! How about you?',
            'bye': 'Goodbye! Have a great day!'
        };

        const lowerCaseMessage = userMessage.toLowerCase();
        return responses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
    }
});

main();
config();

console.log("Hello World");
console.log(process.env.API_KEY);

