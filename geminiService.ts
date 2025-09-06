// geminiService.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); 
// Store API key in .env
console.log(genAI);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "Sorry, I couldn’t process that right now. Please try again.";
  }
};
