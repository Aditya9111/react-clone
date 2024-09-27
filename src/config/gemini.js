import { Configuration, OpenAIApi } from "openai";

// Paste Your API KEY Below
const API_KEY = "";

async function runChat(prompt) {
  // Initialize OpenAI configuration with the API key
  const configuration = new Configuration({
    apiKey: API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  // Setting up the chat completion parameters
  const response = await openai.createChatCompletion({
    model: "gpt-4", // Use "gpt-3.5-turbo" or "gpt-4" depending on your access
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2048, // Maximum number of tokens in the response
    temperature: 0.75, // Adjusts the creativity of the output
    top_p: 1, // Controls diversity via nucleus sampling
    frequency_penalty: 0, // Reduces repetitiveness
    presence_penalty: 0, // Increases likelihood of introducing new topics
  });

  // Extract and return the assistant's message content
  return response.data.choices[0].message.content;
}

export default runChat;
