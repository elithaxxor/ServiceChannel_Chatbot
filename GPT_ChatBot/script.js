document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        appendMessage('user', messageText);
        messageInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            appendMessage('bot', getBotResponse(messageText));
        }, 1000);
    }

    function appendMessage(sender, text) {
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