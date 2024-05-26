import { config } from "dotenv";
config();
import OpenAI from "openai";
import readlineSync from "readline-sync";
import * as readline from "node:readline";

// [NOTE] - THE SERVER COMMUNICATES 2 WAYS:
// 1. [CLIENT RECEIVES PROMPT TO ENTER MESSAGE] var botResponse = res.choices[0].message.content;
// 2. [CLIENT RECEIVES BOT RESPONSE] console.log("[+] [CLI] Chatbot Response:\n ", botResponse)


//& HANDLES LOGIN
const api_key = process.env.API_KEY;
const OPEN_AI = new OpenAI({ apiKey: api_key });
console.log("Hello World");
console.log(process.env.API_KEY);

// [Method #1]
////////////////////////////////////////////////////////////////////////////////////////
//& Function to get Console Interface (stdin and stdout)
//... This function gets the user input and logs it to the console

console.log("[+] [METHOD 1] Starting Console Interface:\n type your first message..\n :->  ");

export function consoleInterface() {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
} console.log("[+] Starting Console Interface: ", consoleInterface);


consoleInterface.prompt();
console.log("-> Starting Console Interface: ");

export async function startCLI() {
    const input = await consoleInterface.on("line", (line) => {
        OPEN_AI.createChatCompletion({
            model: "gpt-4o",
            messages: [{
                role: "user",
                content: line
            }],
        })
    }).then(res => {
        console.log("[+] [CLI] Chatbot Response:\n ", res.choices[0].message.content)
        console.log("[+] [USER-INPUT] :\n ", input)
    })
}
startCLI().then(r => console.log(r));

/////////////////////////////////////////////////////////////////////////////////////
// [METHOED #2]
////////////////////////////////////////////////////////////////////////////////////////
//& Function to get Console Interface (stdin and stdout)
//... This function gets the user input and logs it to the console

console.log("[+] [METHOD 2] Starting Console Interface:\n type your first message..\n :->  ");
export const userIterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); console.log("[+] Starting Console Interface: \n", userIterface);
console.log()
serIterface().prompt(); // sets the client as the prompt to start the chat

userIterface.on("line", async (input) => {
    const res = await OPEN_AI.createChatCompletion({
        model: "gpt-4o",
        messages: [{
            role: "user",
            content: input
        }],
    })
    var botResponse = res.choices[0].message.content;
    console.log("[+] [CLI] Chatbot Response:\n ", botResponse)
    console.log("[+] [USER-INPUT] :\n ", input)
    userIterface.prompt();
})
/////////////////////////////////////////////////////////////////////////////////////
