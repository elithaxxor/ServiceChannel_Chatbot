// import { OpenAIApi } from "openai";
// import { Config } from "openai";

//import { Configuration, OpenAIApi } from "openai";

////////////////////////// 1.0 - Basic Chatbot Init AI //////////////////////////////////////
// #1- TO CREATE PACKAGE.JSON: npm init -y
// #2- TO DEPENDENCIES ENV: nmp i dotenv
// #3- TO DEPENDENCIES: npm install openai
// DOWNLOAD DEPENDENCY readline-sync
// #4- SET JSON SCRIPT IN [PACKAGE.JSON]: change test: "echo ..." to dev "node script.js"
// #5- SET ENV IN [PACKAGE.JSON]: ADD "type" : "module" to the top of the JSON

// #5 - TO RUN: [TERMINAL] npm run dev
// #3- TO POST ONLINE: ngrok http 3000
// --> INIT [dotenv] by calling the config() function
// SWITCH body[model] TO "gpt-4o" FOR BETTER RESPONSES or "gpt-3.5-turbo" for cheaper responses


// *INITIALIZE THE OPENAI API WITH THE API KEY USING THE CONFIGURATION FUNCTION FROM OPENAI
////////////////////////// 1.0 - Basic Chatbot DOM / DATA-UI PERSISTENCE //////////////////////////
// *initialize the function "init" when the page completely loads, then calls a listener for the
// *send button and the message input
// *When the send button is clicked, it calls the sendMessage function
// *When the user presses the [Enter] key, it calls the sendMessage function
// *The sendMessage function gets the message from the input field
// *If the message is empty, it returns
// *Calls the IFACEmsgUpdater function to display the user message

