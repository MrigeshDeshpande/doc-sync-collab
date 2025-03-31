import React, {useState} from "react";
import {TextField, Button, Typography, Box, ToggleButtonGroup, ToggleButton}  from "@mui/material"
import { v4 as uuidv4} from "uuid";
import "../assets/styles/share.css";


const Share = () => {
    const [mode, setMode] = useState("share"); 
    const [documentCode] = useState(uuidv4()); 
    const [inputCode, setInputCode] = useState("");
  
    const handleCopy = () => {
      navigator.clipboard.writeText(documentCode);
      alert("Document code copied to clipboard!");
    };
  
    const handleModeChange = (newMode) => {
      if (newMode !== null) setMode(newMode);
    };
  
    return (
      <Box className="share-container" sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="h6"> {mode === "share" ? "Share Document" : "Join Document"} </Typography>
  
        {/* Toggle between Share & Join Mode */}
        <ToggleButtonGroup className="code-0"
          value={mode}
          exclusive
          onChange={handleModeChange}
          aria-label="toggle share/join mode"
          sx={{ marginBottom: 2 }}
        >
          <ToggleButton value="share">Share</ToggleButton>
          <ToggleButton value="join">Join</ToggleButton>
        </ToggleButtonGroup>
  
        {mode === "share" ? (
          <Box>
            <TextField
              label="Document Code"
              value={documentCode}
              InputProps={{ readOnly: true }}
              variant="outlined"
              fullWidth
            />
            <Button onClick={handleCopy} variant="contained" color="primary" sx={{ marginTop: 1 }}>
              Copy Code
            </Button>
          </Box>
        ) : (
          <Box>
            <TextField
              label="Enter Document Code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              variant="outlined"
              fullWidth
            />
             <Button onClick={handleCopy} variant="contained" color="primary" sx={{ marginTop: 1 }}>
             Let's Go
            </Button>
          </Box>
        )}
      </Box>
    );
  };

  export default Share;


