import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src="/loader.gif" alt="Loading..." className="loader-image" />
    </div>
  );
}
