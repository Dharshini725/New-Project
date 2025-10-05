import { useState } from "react";
import { generateText } from "./utils/openaiService";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    const res = await generateText(prompt);
    setResult(res);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>HeritageXplore AI</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter prompt here..."
      />
      <br />
      <button onClick={handleGenerate}>Generate</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
