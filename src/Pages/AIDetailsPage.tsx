import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/AIDetailsPage.css";

interface SiteData {
  name: string;
  location: string;
  history: string;
  architecture: string;
  significance: string;
  visitingInfo: {
    timings: string;
    entryFee: string;
    bestTime: string;
  };
  images: string[];
  videos: string[];
  facts: string[];
}

// ✅ Per-site videos
const siteVideos: Record<string, string[]> = {
    "Taj Mahal": ["https://www.youtube.com/embed/49HTIoCccDY"],
    "Qutub Minar": ["https://www.youtube.com/embed/47YrmPhMeho"],
    "Hawa Mahal": ["https://www.youtube.com/embed/jSlrNR2hAqc"],
    "Gateway of India": ["https://www.youtube.com/embed/dT_ApSvWB9c"],
    "Red Fort": ["https://www.youtube.com/embed/faHVB_WA2w8"],
};

// ✅ Per-site images
const siteImages: Record<string, string[]> = {
  "Taj Mahal": [
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?cs=srgb&dl=pexels-sudipta-1603650.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/taj-mahal-view-through-archway-sunset_23-2151996310.jpg?semt=ais_incoming&w=740&q=80",
    "https://www.tajmahal.gov.in/images/gallery/taj-mahal/big/6.jpg",
  ],
  "Qutub Minar": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HdNVHuH4E4GheUVx2qFob4fWePqPSb6LYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeQTXe95obqOyRmHQEZbSv3CdyEhHwYd9-Q&s",
  ],
  "Hawa Mahal": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcZkyFE7XBWh4JHTRNG6SrZOTE6JixAuf8Q&s",
    "https://media.istockphoto.com/id/481658071/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=Vzux4HM51dmApeYtsEXkh3p3mthMY41oRPlFCFEGW3s=",
  ],
  "Gateway of India": [
    "https://i.pinimg.com/736x/bd/3d/02/bd3d02a7550c184ab7ba8060f793a78f.jpg",
  ],
  "Red Fort": [
    "https://png.pngtree.com/thumb_back/fh260/background/20250814/pngtree-red-fort-illuminated-in-tricolor-lights-india-image_17936587.webp",
  ],
};

const AIDetailsPage: React.FC = () => {
  const { siteName } = useParams<{ siteName: string }>();
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    if (siteName) {
      generateAIContent(siteName);
    }
  }, [siteName]);

  const generateAIContent = async (name: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/generate?site=${name}`);
      const data = await response.json();

      if (data.success) {
        setSiteData(data.siteData);
      } else {
        setSiteData(getAIGeneratedData(name));
      }
    } catch (error) {
      console.error("AI fetch failed:", error);
      setSiteData(getAIGeneratedData(name));
    }
    setLoading(false);
  };

  const getAIGeneratedData = (siteName: string): SiteData => {
    return {
      name: siteName,
      location: "India",
      history: `🤖 AI GENERATED CONTENT: ${siteName} is one of India's most iconic heritage monuments. It has a rich history spanning centuries and is known for its architectural brilliance and cultural significance. Visitors can learn about its origins, the rulers who built it, and its role in India's history.`,
      architecture: `🏛️ ${siteName} showcases unique architectural elements, intricate carvings, and artistic designs. Its style reflects the era it was built in and represents the pinnacle of craftsmanship of that time.`,
      significance: `🌟 ${siteName} holds immense cultural, historical, and architectural importance. It is not only a symbol of its city but also attracts tourists worldwide for its beauty and legacy.`,
      visitingInfo: {
        timings: "🕐 9 AM - 5 PM",
        entryFee: "💰 ₹30 (Indians), ₹500 (Foreigners)",
        bestTime: "🌤️ October - March",
      },
      images: siteImages[siteName] || [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      ],
      videos: siteVideos[siteName] || ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      facts: [
        `💡 ${siteName} is an iconic monument in India.`,
        `💡 It attracts millions of tourists every year.`,
        `💡 The architecture and design are considered masterpieces.`,
      ],
    };
  };

  const handleAddToVisited = () => {
    if (!siteName) return;

    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userKey = `user_${currentUser}`;
      const userDataString = localStorage.getItem(userKey) || '{"visitedPlaces": []}';
      const userData = JSON.parse(userDataString);

      if (!userData.visitedPlaces.includes(siteName)) {
        userData.visitedPlaces.push(siteName);
        localStorage.setItem(userKey, JSON.stringify(userData));
        alert(`✅ ${siteName} added to your visited places!`);
      } else {
        alert(`ℹ️ ${siteName} is already in your visited places!`);
      }
    } else {
      alert("🔐 Please login to add places to your visited list!");
    }
  };

  if (loading) {
    return (
      <div className="ai-details-container">
        <div className="ai-loading-container">
          <div className="ai-loader">
            <div className="ai-brain">🧠</div>
            <div className="ai-waves">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
          <h2>🤖 AI is analyzing {siteName}...</h2>
          <p>Gathering historical data, architectural details, and cultural insights...</p>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="ai-details-container">
        <div className="error-container">
          <h2>❌ Analysis Failed</h2>
          <p>AI couldn't generate content for this site.</p>
          <button onClick={() => navigate("/")} className="back-btn">
            🏠 Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-details-container">
      <div className="ai-header">
        <button onClick={() => navigate(-1)} className="ai-back-btn">← Back</button>
        <div className="ai-badge">🤖 AI Generated Content</div>
        <h1>{siteData.name}</h1>
        <p className="ai-location">{siteData.location}</p>
        <button onClick={handleAddToVisited} className="add-visited-btn">
          ⭐ Add to My Visited Places
        </button>
      </div>

      <div className="ai-content">
        {/* AI Image Gallery */}
        <div className="ai-image-gallery">
          <h3>📸 AI Curated Images</h3>
          <div className="gallery-grid">
            {siteData.images.map((image, index) => (
              <img key={index} src={image} alt={`${siteData.name} ${index + 1}`} className="ai-gallery-image" />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="ai-tab-navigation">
          {["history", "architecture", "significance", "visiting", "facts", "videos"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "ai-tab active" : "ai-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "history" && "📚 History"}
              {tab === "architecture" && "🏛️ Architecture"}
              {tab === "significance" && "🌟 Significance"}
              {tab === "visiting" && "🗺️ Visiting Info"}
              {tab === "facts" && "💡 Fun Facts"}
              {tab === "videos" && "🎥 Videos"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="ai-tab-content" style={{ fontWeight: "bold", color: "#fff" }}>
          {activeTab === "history" && <p>{siteData.history}</p>}
          {activeTab === "architecture" && <p>{siteData.architecture}</p>}
          {activeTab === "significance" && <p>{siteData.significance}</p>}
          {activeTab === "visiting" && (
            <div className="visiting-info">
              <p>{siteData.visitingInfo.timings}</p>
              <p>{siteData.visitingInfo.entryFee}</p>
              <p>{siteData.visitingInfo.bestTime}</p>
            </div>
          )}
          {activeTab === "facts" && (
            <ul className="facts-list">
              {siteData.facts.map((fact, index) => <li key={index}>{fact}</li>)}
            </ul>
          )}
          {activeTab === "videos" && (
            <div className="video-gallery">
              {siteData.videos.map((video, index) => (
                <iframe
                  key={index}
                  src={video}
                  title={`${siteData.name} video ${index + 1}`}
                  width="560"
                  height="315"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDetailsPage;
