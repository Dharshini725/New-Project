/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import ExplorePage from "../Pages/Explorepage";
import AIDetailsPage from "../Pages/AIDetailsPage";
import LoginPage from "../Pages/LoginPage"; // if you have one

function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/details" element={<AIDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import ExplorePage from "../Pages/Explorepage";
import AIDetailsPage from "../Pages/AIDetailsPage";
import LoginPage from "../Pages/LoginPage";
import AboutPage from "../Pages/AboutPage";

function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/aidetailspage" element={<AIDetailsPage />} />
        <Route path="/ai-details/:placeName" element={<AIDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default RouteConfig;
