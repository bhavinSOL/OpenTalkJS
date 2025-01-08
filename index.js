
//**************************** */
// assignment 16
//****************************** */
import ollama from "ollama";
import fs from "fs";
let subDir = process.argv;
getQuestion(subDir)


async function getQuestion(subDir) {
  try{
      let q=Math.floor(Math.random() * 3) + 1
      let p=`./input/${subDir[2]}/q${q}.txt`
      let out=`./output2/${subDir[2]}/q${q}.txt`
      try{
        let question=fs.readFileSync(p, "utf-8");
        console.log(question)

        try {
          const response = await ollama.chat({
            model: "qwen2:0.5b",
            messages: [{ role: "user", content: question }]
          });
          const a=response.message.content;
      
          await fs.writeFileSync(out, a);
          console.log(`Response written to: ${out}.txt `);
        } catch (error) {
          console.error("Error :", error.message);
        }
      }
      catch (error) {
            console.error("Error occurred:", error.message);
      }
  }
  catch (error) {
        console.error("Error occurred at:", error.message);
  }
}

