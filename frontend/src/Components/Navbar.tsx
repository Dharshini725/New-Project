// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
      <Link to="/ai" style={{ margin: "10px" }}>AI Assistant</Link>
    </nav>
  );
}
