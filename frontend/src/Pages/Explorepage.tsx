import React, { useState } from "react";
import "../Styles/ExplorePage.css";
import { generateText } from "../utils/openaiService";
import { useLocation, useNavigate } from "react-router-dom";

const ExplorePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiPlaces, setAiPlaces] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const searchLocation = query.get("location") || "India";

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `List 5 famous heritage places in ${searchLocation} with short names (comma separated).`;
    const result = await generateText(prompt);

    const places = result.split(",").map((p) => p.trim()).filter(Boolean);
    setAiPlaces(places);
    setLoading(false);
  };

  return (
    <div className="explore-page">
      <h1>Explore Heritage of {searchLocation}</h1>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Loading..." : "Show Heritage Sites"}
      </button>

      <div className="sites-container">
        {aiPlaces.length > 0 ? (
          aiPlaces.map((place, index) => (
            <div key={index} className="site-card">
              <h3>{place}</h3>
              <button
                onClick={() =>
                  navigate(`/ai-details/${encodeURIComponent(place)}/${encodeURIComponent(searchLocation)}`)
                }
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>Click “Show Heritage Sites” to load AI-generated places.</p>
        )}
      </div>

    
    </div>
  );
};

export default ExplorePage;
