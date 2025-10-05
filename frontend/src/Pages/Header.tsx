import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchLocation.trim() !== "") {
      navigate("/explore", { state: { location: searchLocation } });
    }
  };

  return (
    <header className="header">
      <input
        type="text"
        placeholder="Enter a location..."
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Start Your Journey</button>
    </header>
  );
}

export default Header;
