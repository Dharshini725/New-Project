import React from "react";
import { useParams } from "react-router-dom";

const SiteDetails: React.FC = () => {
  const { siteName } = useParams();

  return (
    <div
      style={{
        marginTop: "120px",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      {siteName} Details Page (Coming Soon)
    </div>
  );
};

export default SiteDetails;
