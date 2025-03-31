import React, { useState } from "react";
import Editor from "./components/Editor";
import { Button, Typography, Container, Grid } from "@mui/material";
import Share from "./components/Share";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [versions, setVersions] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  const saveVersion = () => {
    if (editorContent.trim()) {
      const newVersion = { id: Date.now(), content: editorContent };
      setVersions((prevVersions) => [...prevVersions, newVersion]);
    }
  };

  const restoreVersion = (content) => {
    setEditorContent(content);
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

        <Editor setEditorContent={setEditorContent} editorContent={editorContent} />

        <button className="save-btn" onClick={saveVersion}>Save Version</button>
      </div>
    </div>
  );
};

export default App;
