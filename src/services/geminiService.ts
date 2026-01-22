import { GoogleGenerativeAI } from "@google/generative-ai";
import { profileData } from "../data";

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

export const getGeminiResponse = async (userMessage: string) => {
  const systemInstruction = `
    You are an AI assistant for the personal website of ${profileData.name}.
    Your goal is to answer questions about ${profileData.name}'s professional background, skills, and experience based on the following data:
    
    Name: ${profileData.name}
    Role: ${profileData.role}
    About: ${profileData.about}
    Location: ${profileData.location}
    Skills: ${JSON.stringify(profileData.skills)}
    Experience: ${JSON.stringify(profileData.experience)}
    Projects: ${JSON.stringify(profileData.projects)}
    
    Guidelines:
    - Be professional, polite, and helpful.
    - If you don't know an answer based on the data provided, say you're not sure but suggest contacting ${profileData.name} via email at ${profileData.email}.
    - Keep responses concise and focused on professional topics.
    - Respond in the same language as the user (Vietnamese or English).
  `;

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction
    });
    
    const result = await model.generateContent(userMessage);
    return result.response.text() || "Xin lỗi, tôi gặp chút trục trặc khi xử lý yêu cầu.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống đang bận, vui lòng thử lại sau.";
  }
};