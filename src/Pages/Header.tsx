import "../Styles/Header.css"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Header: React.FC = () => {
  const [location, setLocation] = useState("")
  const [username, setUsername] = useState<string | null>(null)
  const navigate = useNavigate()

  // Load user on mount
  useEffect(() => {
    const loadUser = () => setUsername(localStorage.getItem("currentUser"))
    loadUser()
    window.addEventListener("user-changed", loadUser)
    return () => window.removeEventListener("user-changed", loadUser)
  }, [])

  const handleStartJourney = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (location.trim() !== "") {
      const formatted = encodeURIComponent(location.trim())
      navigate(`/explore/${formatted}`)
      setLocation("")
    }
  }

  const handleLogin = () => navigate("/login")
  const handleVisitedPlaces = () => navigate("/visited-places")

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="search-wrapper">
          <h1>Welcome to HeritageXplore</h1>
          <p>Discover India’s Glorious Past</p>

          <form className="input-group" onSubmit={handleStartJourney}>
            <input
              type="text"
              placeholder="Enter a location (e.g., Delhi)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Start Your Journey</button>
          </form>
        </div>

        <div className="login-wrapper">
          {username ? (
            <button onClick={handleVisitedPlaces}>Welcome, {username}</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
