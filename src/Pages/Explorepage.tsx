import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../Styles/ExplorePage.css"

const ExplorePage: React.FC = () => {
  const { location } = useParams<{ location: string }>()

  useEffect(() => {
    if (location) {
      const decoded = decodeURIComponent(location)
      let savedPlaces = JSON.parse(localStorage.getItem("visitedPlaces") || "[]")
      if (!savedPlaces.some((p: string) => p.toLowerCase() === decoded.toLowerCase())) {
        savedPlaces.push(decoded)
        localStorage.setItem("visitedPlaces", JSON.stringify(savedPlaces))
      }
    }
  }, [location])

  return (
    <div className="explore-container">
      <h1 className="explore-title">Exploring {decodeURIComponent(location || "")}</h1>
      <p className="explore-description">
        Here AI will fetch related videos, photos, and stories about{" "}
        {decodeURIComponent(location || "")}.
      </p>
    </div>
  )
}

export default ExplorePage
