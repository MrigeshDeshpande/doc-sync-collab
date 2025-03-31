import React from "react";
import "../assets/styles/sidebar.css"
import Share from "../components/Share"

const Sidebar = ({ versions, restoreVersion }) => {
    return (
      <div className="sidebar-container">
        <h3 className="sidebar-title">Version History</h3>
        {versions.length === 0 ? (
          <p className="no-versions">No versions saved yet.</p>
        ) : (
          <ul className="version-list">
            {versions.map((version, index) => (
              <li key={version.id} className="version-item">
          <span>Version {index + 1} ({version.timestamp})</span>
          <button 
  className="restore-btn" 
  onClick={() => {
    console.log("Clicked Restore for Version", index);
    restoreVersion(index);
  }}
>
  Restore
</button>
              </li>
            ))}
          </ul>
        )}
          <div className="share-wrapper">
          <Share />
        </div>
      </div>
    );
  };
  

export default Sidebar;
