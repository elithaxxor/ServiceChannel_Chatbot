
// [NOTE] - THE SERVER COMMUNICATES 2 WAYS:
// 1. [CLIENT RECEIVES PROMPT TO ENTER MESSAGE] var botResponse = res.choices[0].message.content;
// 2. [CLIENT RECEIVES BOT RESPONSE] console.log("[+] [CLI] Chatbot Response:\n ", botResponse)

import {
    userName,
    chatHistory,
    userInput,
    completionText,
    messagesArr,
    botResp,
    clientResp,
    main,
    getBotResponse,

} from './api_worker.js';

console.log('[+] Script.js loaded successfully!' + "\n [USERNAME]" + userName + "\n[CHAT HISTORY] =" + chatHistory +
    "\n[USER INPUT]" + userInput + "\n[COMPLETION TEXT]" + completionText + "\n[MESSAGE ARRAY]" + messagesArr);


if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    // botResp();
    // clientResp();

} else {
    document.addEventListener('DOMContentLoaded', function () {
        // botResp();
        // clientResp();
        console.log('document was not ready, place code here');
    });
}



document.addEventListener('DOMContentLoaded', () => {

    console.log('[+] DOMContentLoaded, [EVENT LISTENER] added to [DOCUMENT] ');

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', parseMsg, (res) => {
        console.log('[!]Send button clicked');
        parseMsg();
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            console.log('[!]Enter key pressed');
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
        console.log('[+] parseMsg() called');
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

