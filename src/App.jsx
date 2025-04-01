import React, { useState } from "react";
import Editor from "./components/Editor";
import { Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [versions, setVersions] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  const saveVersion = () => {
    if (String(editorContent).trim()) {
      const newVersion = {
        id: Date.now(),
        content: editorContent,
        timestamp: new Date().toLocaleString(),
      };
      setVersions((prevVersions) => [...prevVersions, newVersion]);
    }
  };

  const restoreVersion = (versionIndex) => {
    console.log("Restore button clicked for version:", versionIndex);

    if (!versions[versionIndex]) {
      console.error("Error: Version not found!");
      return;
    }

    console.log("Restoring content:", versions[versionIndex].content);
    setEditorContent(versions[versionIndex].content);
    console.log(
      "Editor content should now be:",
      versions[versionIndex].content,
    );
  };

  return (
    <div className="app-container">
      {/* Sidebar (Version History + Share) */}
      <Sidebar versions={versions} restoreVersion={restoreVersion} />

      {/* Main Editor Area */}
      <div className="editor-section">
        <Typography variant="h4" className="page-title">
          Jaadugar Ki Jaadui Duniya...
        </Typography>

        <Editor
          setEditorContent={setEditorContent}
          editorContent={editorContent}
        />

        <button className="save-btn" onClick={saveVersion}>
          Save Version
        </button>
      </div>
    </div>
  );
};

export default App;
