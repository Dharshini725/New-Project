import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  username: string;
  visitedPlaces: string[];
}

const ProfilePage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const [newPlace, setNewPlace] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(user);
      const userDataString = localStorage.getItem(`user_${user}`) || '{"visitedPlaces": []}';
      const userData: UserData = JSON.parse(userDataString);
      setVisitedPlaces(userData.visitedPlaces || []);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleAddPlace = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlace.trim()) {
      const updatedPlaces = [...visitedPlaces, newPlace.trim()];
      setVisitedPlaces(updatedPlaces);
      
      // Update localStorage
      const userKey = `user_${currentUser}`;
      const userDataString = localStorage.getItem(userKey) || '{"visitedPlaces": []}';
      const userData: UserData = JSON.parse(userDataString);
      userData.visitedPlaces = updatedPlaces;
      localStorage.setItem(userKey, JSON.stringify(userData));
      
      setNewPlace("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div style={styles.profilePageContainer}>
      <div style={styles.profileHeader}>
        <h2>Welcome, {currentUser}!</h2>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
      
      <div style={styles.profileContent}>
        <div style={styles.addPlaceSection}>
          <h3>Add a Visited Place</h3>
          <form onSubmit={handleAddPlace} style={styles.placeForm}>
            <input
              type="text"
              value={newPlace}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPlace(e.target.value)}
              placeholder="Enter a place you've visited"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.addBtn}>Add Place</button>
          </form>
        </div>
        
        <div style={styles.placesSection}>
          <h3>Your Visited Places</h3>
          {visitedPlaces.length === 0 ? (
            <p style={styles.noPlaces}>No places visited yet. Add some above!</p>
          ) : (
            <ul style={styles.placesList}>
              {visitedPlaces.map((place, index) => (
                <li key={index} style={styles.placeItem}>
                  <span style={styles.placeIcon}>📍</span>
                  {place}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  profilePageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    padding: '20px',
  } as React.CSSProperties,
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  } as React.CSSProperties,
  logoutBtn: {
    padding: '8px 16px',
    backgroundColor: '#ff4757',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  } as React.CSSProperties,
  profileContent: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  } as React.CSSProperties,
  addPlaceSection: {
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  placeForm: {
    display: 'flex',
    gap: '10px',
    marginTop: '1rem',
  } as React.CSSProperties,
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  } as React.CSSProperties,
  addBtn: {
    padding: '10px 16px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
  noPlaces: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    margin: '2rem 0',
  } as React.CSSProperties,
  placesList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  } as React.CSSProperties,
  placeItem: {
    padding: '10px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  } as React.CSSProperties,
  placeIcon: {
    fontSize: '1.2rem',
  } as React.CSSProperties,
};

export default ProfilePage;