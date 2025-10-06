// src/Pages/AIDetailsPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../Styles/AIDetailsPage.css";

interface SiteDetails {
  name: string;
  description: string;
  history: string;
  architecture: string;
  significance: string;
  images: string[];
  videos: string[];
}

const AIDetailsPage: React.FC = () => {
  const { siteName } = useParams<{ siteName: string }>();
  const locationHook = useLocation();
  const query = new URLSearchParams(locationHook.search);
  const userLocation = query.get("place");
  const [details, setDetails] = useState<SiteDetails | null>(null);

  useEffect(() => {
    if (siteName) {
      fetchSiteDetails(siteName);
      updateVisited(siteName);
    }
  }, [siteName]);

  const fetchSiteDetails = async (name: string) => {
    try {
      const res = await fetch("http://localhost:5000/api/ai/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteName: name, location: userLocation }),
      });
      const data = await res.json();
      setDetails(data.details || null);
    } catch (err) {
      console.error("AI details error:", err);
    }
  };

  const updateVisited = (site: string) => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const userKey = `user_${user}`;
      const raw = localStorage.getItem(userKey);
      const obj = raw ? JSON.parse(raw) : { visitedPlaces: [] };
      if (!obj.visitedPlaces.includes(site)) {
        obj.visitedPlaces.push(site);
        localStorage.setItem(userKey, JSON.stringify(obj));
        window.dispatchEvent(new Event("visited-changed"));
      }
    }
  };

  if (!details) return <p>Loading details...</p>;

  return (
    <div className="details-container">
      <h1>{details.name}</h1>
      <p>{details.description}</p>

      <h2>History</h2>
      <p>{details.history}</p>

      <h2>Architecture</h2>
      <p>{details.architecture}</p>

      <h2>Significance</h2>
      <p>{details.significance}</p>

      <div className="media-section">
        {details.images?.length > 0 && (
          <>
            <h3>Images</h3>
            <div className="image-gallery">
              {details.images.map((img, i) => (
                <img key={i} src={img} alt={`${details.name}-${i}`} />
              ))}
            </div>
          </>
        )}

        {details.videos?.length > 0 && (
          <>
            <h3>Videos</h3>
            <div className="video-gallery">
              {details.videos.map((vid, i) => (
                <video key={i} src={vid} controls />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIDetailsPage;
