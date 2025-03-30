import React from "react"
import Editor from "./components/Editor"
import { Typography, Container, Grid } from "@mui/material";
import Share from "./components/Share";
import "./App.css";

const App = () => {
  return (
    <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
            Collaborative Writing Platform
          </Typography>

          <Grid container justifyContent="center" alignItems="flex-start" spacing={3}  gap={10} >
              <Grid item>
                <Editor />
              </Grid>
              <Grid item>
                <Share />
              </Grid>
          </Grid>`
    </Container>
  );
};
export default App;