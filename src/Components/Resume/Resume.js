import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <Box component="header">
        <Typography variant="h4" align="center">
          Working Experience
        </Typography>
        <Box component="div">
          <Typography variant="h2">2013</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Resume;
