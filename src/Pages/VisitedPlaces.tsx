import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Styles/VisitedPlaces.css"

const VisitedPlaces: React.FC = () => {
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([])
  const [username, setUsername] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    setUsername(user)

    const savedPlaces = JSON.parse(localStorage.getItem("visitedPlaces") || "[]")
    setVisitedPlaces(savedPlaces)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("visitedPlaces")
    window.dispatchEvent(new Event("user-changed"))
    navigate("/")
  }

  return (
    <div className="visited-container">
      {username ? (
        <>
          <h1>Welcome, {username}!</h1>
          <h2>Your Visited Heritage Sites</h2>
          {visitedPlaces.length > 0 ? (
            <ul className="places-list">
              {visitedPlaces.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
          ) : (
            <p>No places visited yet. Start exploring!</p>
          )}
          <button onClick={handleLogout} className="logout-btn">Logout</button>
          <button onClick={() => navigate("/")}>🏠 Home</button>

        </>
      ) : (
        <p>Please login first.</p>
      )}
    </div>
  )
}

export default VisitedPlaces
