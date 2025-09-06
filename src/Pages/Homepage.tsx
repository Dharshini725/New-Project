// src/pages/Homepage.tsx
import Header from "../Pages/Header"; // ✅ Make sure path is correct
import "../Styles/Homepage.css";
import PopularSites from "../Components/PopularSites";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Top navigation/header */}
      <Header /> 

      {/* Popular sites section (your friend's work) */}
      <PopularSites />
    </>
  );
};

export default Homepage;
