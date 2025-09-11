import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Styles/LoginPage.css"

const LoginPage: React.FC = () => {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("currentUser", name.trim())
      window.dispatchEvent(new Event("user-changed"))
      navigate("/")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("visitedPlaces")
    window.dispatchEvent(new Event("user-changed"))
    navigate("/")
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  )
}

export default LoginPage
