import React from "react";
import "../assets/styles/sidebar.css"

const Sidebar = ({ versions, restoreVersion }) => {
    return (
      <div className="sidebar-container">
        <h3>Version History</h3>
        {versions.length === 0 ? (
          <p className="no-versions">No versions saved yet.</p>
        ) : (
          <ul className="version-list">
            {versions.map((version, index) => (
              <li key={version.id} className="version-item">
                <span>Version {index + 1}</span>
                <button className="restore-btn" onClick={() => restoreVersion(version.content)}>
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Sidebar;
