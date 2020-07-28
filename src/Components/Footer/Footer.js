/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Facebook: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "#1a4566",
        fontSize: "1.8rem",
      },
    },
  },
  Instagram: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#f037b2",
        fontSize: "1.8rem",
      },
    },
  },
  GitHub: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tan",
        fontSize: "1.8rem",
      },
    },
  },
  LinkedIn: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#0384fc",
        fontSize: "1.8rem",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={
            <a href="https://www.facebook.com/itsvivekghosh/" target="_blank">
              <Facebook />
            </a>
          }
          className={classes.Facebook}
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          className={classes.Instagram}
          icon={
            <a href="https://www.instagram.com/vvivekghosh/" target="_blank">
              <Instagram />
            </a>
          }
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          className={classes.LinkedIn}
          icon={
            <a
              href="https://www.linkedin.com/in/itsvivekghosh/"
              target="_blank"
            >
              <LinkedIn />
            </a>
          }
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          className={classes.GitHub}
          icon={
            <a href="https://www.github.com/itsvivekghosh/" target="_blank">
              <GitHub />
            </a>
          }
        />
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
