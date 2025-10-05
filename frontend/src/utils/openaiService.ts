// src/utils/openaiService.ts
export async function generateText(prompt: string): Promise<string> {
  try {
    const response = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Fetch error:", error);
    return "Error: Could not fetch response.";
  }
}
