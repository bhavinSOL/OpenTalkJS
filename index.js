// const { Ollama } = require("ollama");

// async function runChat() {
//   try {
//     const ollama = new Ollama();
//     const response = await ollama.chat({
//       model: "qwen2:0.5b",
//       messages: [{ role: "user", content: "Write a bug report" }]
//     });

//     console.log("Chatbot Response:", response.message.content);
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// runChat();

import ollama from "ollama";
import fs from "fs";

let q= fs.readFileSync("./q.txt", "utf-8");
console.log(q)

askQuestion()
async function askQuestion() {
  try {
    const response = await ollama.chat({
      model: "qwen2:0.5b",
      messages: [{ role: 'user', content: q }]
    });

    fs.writeFileSync("./a.txt", response.message.content);

  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}
