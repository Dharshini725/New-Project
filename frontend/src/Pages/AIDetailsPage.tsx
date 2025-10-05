/*import React, { useEffect, useState } from "react";
import { getHeritageDetails } from "../utils/openaiService.ts";
import { useLocation } from "react-router-dom";
import "./AIDetailsPage.css"; // we’ll style it later

function AIDetailsPage() {
  const [details, setDetails] = useState("");
  const location = useLocation();
  const placeName = location?.state?.placeName || "Unknown Place";

  useEffect(() => {
    async function fetchData() {
      const result = await getHeritageDetails(placeName);
      setDetails(result);
    }
    fetchData();
  }, [placeName]);

  return (
    <div className="ai-details-container">
      <h1 className="page-title">{placeName}</h1>

      {details ? (
        <div className="ai-content">
          <p>{details}</p>
        </div>
      ) : (
        <p className="loading">Loading immersive details for {placeName}...</p>
      )}
    </div>
  );
}

export default AIDetailsPage;
*/

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHeritageInfo } from "../utils/openaiService";
import "../Styles/AIDetailsPage.css"; // you can style later

const AIDetailsPage = () => {
  const location = useLocation();
  const placeName = location.state?.placeName || "Unknown Heritage Site";

  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const prompt = `Give detailed information about ${placeName}, including:
        - Historical background
        - Architectural style and period
        - Cultural and spiritual significance
        - Interesting facts or legends
        - Visitor information if relevant
        Write in an engaging storytelling tone.`;

        const response = await getHeritageInfo(prompt);
        setDetails(response);
      } catch (error) {
        console.error("Error fetching details:", error);
        setDetails("Failed to load details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [placeName]);

  return (
    <div className="ai-details-container">
      <h1 className="place-title">{placeName}</h1>

      {loading ? (
        <p className="loading-text">✨ Fetching AI-powered details...</p>
      ) : (
        <div className="details-box">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default AIDetailsPage;
