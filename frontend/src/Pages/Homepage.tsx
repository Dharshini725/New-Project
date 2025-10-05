// src/pages/Homepage.tsx
import Header from "../Pages/Header"; // ✅ Make sure path is correct
import "../Styles/Homepage.css";
import PopularSites from "../Pages/PopularSites";
import Hero from "../Pages/Hero";
import AboutCard from "../Components/AboutCard";

const Homepage: React.FC = () => {
  return (
    <main>
      <Header /> 
      <PopularSites />
      <Hero />
      <AboutCard />
    </main>
  );
};


export default Homepage;
