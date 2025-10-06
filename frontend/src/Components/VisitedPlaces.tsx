// src/pages/VisitedPlaces.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/VisitedPlaces.css";

interface VisitedPlace {
  name: string;
  location: string;
}

const VisitedPlaces: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [places, setPlaces] = useState<VisitedPlace[]>([]);
  const navigate = useNavigate();

  const loadPlaces = () => {
    const u = localStorage.getItem("currentUser");
    setUsername(u);

    if (u) {
      const userKey = `user_${u}`;
      try {
        const raw = localStorage.getItem(userKey);
        const userObj = raw ? JSON.parse(raw) : { visitedPlaces: [] };
        setPlaces(userObj.visitedPlaces || []);
      } catch {
        setPlaces([]);
      }
    } else {
      setPlaces([]);
    }
  };

  useEffect(() => {
    loadPlaces();
    window.addEventListener("user-changed", loadPlaces);
    window.addEventListener("visited-changed", loadPlaces);
    return () => {
      window.removeEventListener("user-changed", loadPlaces);
      window.removeEventListener("visited-changed", loadPlaces);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("user-changed"));
    navigate("/");
  };

  return (
    <div className="visited-places-container">
      <div className="visited-places-content">
        {username ? (
          <>
            <h1>Welcome, {username}!</h1>
            <h2>Your Visited Heritage Sites</h2>

            {places.length > 0 ? (
              <div className="places-list">
                <ul>
                  {places.map((p, i) => (
                    <li
                      key={i}
                      onClick={() =>
                        navigate(
                          `/ai-details/${encodeURIComponent(p.name)}/${encodeURIComponent(
                            p.location
                          )}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {p.name} ({p.location})
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="no-places">
                <p>No places visited yet. Start exploring!</p>
              </div>
            )}

            <div style={{ marginTop: 20 }}>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => navigate("/")}
                className="home-btn"
              >
                Home
              </button>
            </div>
          </>
        ) : (
          <p>Please login to view your visited places.</p>
        )}
      </div>
    </div>
  );
};

export default VisitedPlaces;
