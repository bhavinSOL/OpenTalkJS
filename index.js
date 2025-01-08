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
import fs from "fs/promises";

async function askQuestion() {
  try {
    // Read the question from the file
    let q = await fs.readFile("q.txt", "utf-8");
    console.log(q);

    const response = await ollama.chat({
      model: "qwen2:0.5b",
      messages: [{ role: "user", content: q }]
    });
    const a=response.message.content;

    await fs.writeFile("a.txt", a);
    console.log("Response written to a.txt");
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}
askQuestion();
