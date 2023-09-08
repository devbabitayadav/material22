import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import UploadIcon from "@mui/icons-material/Upload";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#793FDF",
      },
      secondary: {
        main: "#FFFD8C",
      },
    },
  });

  const customStyle = {
    backgroundColor: "yellow",
    border: "10px solid black",
  };

  const handleAdd=()=>{
    return alert("cliked here")
  }
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center" sx={customStyle}>
        Hello
      </Typography> 

      <Typography variant="h3" color="primary">
        Hello All
      </Typography> 

      <Button sx={customStyle} variant="contained" color="secondary" startIcon={<UploadIcon />} onClick={handleAdd}>
        Upload File
      </Button>
    </ThemeProvider>
  );
};

export default App;
