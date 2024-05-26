import { config } from "dotenv";
config();
import OpenAI from "openai";
import readlineSync from "readline-sync";

//& HANDLES LOGIN
const api_key = process.env.API_KEY;
const OPEN_AI = new OpenAI({ apiKey: api_key });
console.log("Hello World");
console.log(process.env.API_KEY);



//& Starts the chatbot logic, manages data flow
export async function main() {
    export const userName = readlineSync.question("What is your name? ");
    console.log(colors.bold.green("[!] Welcome to the server!"));
    console.log("Hello, " + userName + "!");

    //export const userInput = readlineSync.question(colors.blue ("[!] Enter your message: "));
    //console.log(colors.bold.green("[!] User Input: ", userInput));
    console.log(colors.bold.green("[!] Welcome to the server!", userName));

    export const chatHistory = [];

    // Loop to get user input and bot response
    // Then,
    while (true) {
        export const userInput = readlineSync.question(colors.blue(Colors.blue("[!] Enter your message: ")));

        try {
            export const messagesArr = chatHistory.map(([role, content]) => ({
                role,
                content
            }));
            console.log("[!] Chat History: ", chatHistory);


            console.log("[!] Message added from chat history: ", messagesArr);

            // Add the user input to the chat history array mapping the role and content and log it to the console
            messagesArr.push({role: "user", content: userInput});
            console.log("[!] Message added from user input: ", messagesArr);

            // Call  the api with user input and get the response
            const chatCompletion = await OPEN_AI.createChatCompletion({
                messages: [{role: "user", content: messagesArr}],
                model: "gpt-4o",
            });

            export const completionText = chatCompletion.choices[0].message.content;
            console.log("[+] User Response: " + chatCompletion.choices[0].message.content)

            if (userInput.toLowerCase() === "exit") {
                console.log(colors.bold.red("[!] EXITING, due to user input!"), userName, ":", completionText);
                return;
            }

            /// CATCHING THE BOTS RESPONSE
            console.log(colors.bold.green("[!] Chatbot Response: " + chatCompletion.choices[0].message.content))
            console.log("[!] Chat History: ", chatHistory);


            chatHistory.push(["user", userInput]);
            chatHistory.push(["user", completionText]);
            console.log("[!] Chat History: ", chatHistory);
            console.log()

        } catch (error) {
            console.error("[-] Error in chatCompletion (calling api with user input) ", error);
        }
    }
}


//& FUNCTION TO CREATE CHAT COMPLETION
//- This function creates a chat completion with the model "gpt-4o" and the message "Server (chatgpt) message."
async function sysResp() {
    const chatCompletion = await OPEN_AI.chat.completions.create({
        messages: [{ role: "system", content: "Server (chatgpt) message." }],
        model: "gpt-4o",
    });
    console.log("[+] Chatbot Response: " + chatCompletion.choices[0].message.content)
}

//& FUNCTION TO GET THE BOT RESPONSE
async function botResp() {
  const completion = await OPEN_AI.chat.completions.create({
    messages: [{ role: "assistant", content: "Server (chatgpt) message." }],
    model: "gpt-4o",
  });
  console.log(completion.choices[0]);
}

//& FUNCTION TO GET THE USER RESPONSE
async function clientResp() {
    const completion = await OPEN_AI.chat.completions.create(
        {
            messages: [{role: "user", content: "Client Message."}],
            model: "gpt-4o",
        }).then(res => {
        console.log("Chatbot Response: " + completion.choices[0].message.content + "\n" + res.data.choices[0].message.content)
    })
}






//& Logic TO GET THE BOT RESPONSE
/*
OPEN_AI.createChatCompletion({
    model: "gpt-4o",
  messages: [
    {
        role: "user",
        content: "Client Message." },
  ],
}).then( res => {
    console.log("Chatbot Response: " + completion.choices[0].message.content + "\n" + res);
});
*/
// config();
