import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Exploring {decodeURIComponent(location || "")}</h1>
      <p>Here AI will fetch related videos, photos, and stories for {decodeURIComponent(location || "")}.</p>
    </div>
  )
}

export default ExplorePage
