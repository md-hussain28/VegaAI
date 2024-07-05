import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDiiTsF8l8KWoQDmdF9Co9McDdIdbPmUd0";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    console.log("Starting chat session with prompt:", prompt);

    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });

    console.log("Chat session started");

    const result = await chatSession.sendMessage(prompt);

    console.log("Message sent, result received:", result);

    if (result && result.response && result.response.text) {
      console.log("Returning response text");
      return result.response.text();
    } else {
      console.error("Unexpected response format:", result);
      return "Unexpected response format";
    }
  } catch (error) {
    console.error("Error during chat session:", error);
    return "An error occurred during the chat session";
  }
}

export default run;
