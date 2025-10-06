export const generateText = async (prompt: string) => {
  try {
    const response = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return data.text || "No response from AI.";
  } catch (error) {
    console.error("Error generating text:", error);
    return "Error connecting to AI server.";
  }
};
