import React ,{useState} from "react"
import Editor from "./components/Editor"
import { Button, Typography, Container, Grid } from "@mui/material";
import Share from "./components/Share";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [versions, setVersions] = useState([]);

  const saveVersion = (content) => {
    if (content.trim()) {
      const newVersion = { id: Date.now(), content };
      setVersions((prevVersions) => [...prevVersions, newVersion]);
    }
  };

  const restoreVersion = (content) => {
    console.log("Restoring version:", content);
  };

  return (
    <div className="app-container">
      <Sidebar versions={versions} restoreVersion={restoreVersion} />

      <div className="main-content">
        <Typography variant="h4" align="center" className="page-title"  sx={{ marginBottom: "20px" }}>
          Jaadugar Ki Jaadui Duniya...
          </Typography>

        <Container maxWidth="lg">
          <Grid container justifyContent="center" alignItems="flex-start" spacing={3}>
            <Grid item xs={6}>
              <Editor saveVersion={saveVersion} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => saveVersion("Current editor content")}
                sx={{ marginTop: 2 }}
              >
                Save Version
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Share />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default App;