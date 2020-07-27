import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../../Static/avatar.png";

const Header = () => {
  return (
    <div>
      <Box>
        <Avatar src={avatar} alt="Vivek Kumar Ghosh"></Avatar>
      </Box>
    </div>
  );
};

export default Header;
