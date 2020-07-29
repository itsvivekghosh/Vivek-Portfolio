/* eslint-disable */
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import MobileLeftMenuSlider from "@material-ui/core/Drawer/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import { AssignmentInd, Home } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import avatar from "../../static/vivek.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer";
import SchoolIcon from "@material-ui/icons/School";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import AccountTreeSharpIcon from "@material-ui/icons/AccountTreeSharp";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";

// CSS STYLE for UI
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "auto",
    height: 800,
    background: "#2d2d2d",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  listItemText: {
    color: "tan",
  },
  listItemIcon: {
    color: "tan",
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "white",
      },
    },
  },
  topHeading: {
    fontFamily: "Fira Code, Arial",
    textColor: "tan",
    paddingTop: "25px",
    textAlign: "center",
    paddingBottom: "20px",
  },
  boxComponent: {
    paddingBottom: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(5),
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "white",
      },
    },
  },
  contacts: {
    alignItems: "right",
  },
  insideContainerHeading: {
    display: "flex",
    padding: "5px 5px",
    justifyContent: "center",
    color: "tan",
  },
  insideContainerElement: {
    display: "flex",
    color: "wheat",
    fontSize: "12px",
    justifyContent: "center",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <ChromeReaderModeIcon />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <AnnouncementIcon />,
    listText: "Announcements",
    listPath: "/announcements",
  },
  {
    listIcon: <AccountTreeSharpIcon />,
    listText: "Working",
    listPath: "/working",
  },
  {
    listIcon: <SchoolIcon />,
    listText: "Adademics",
    listPath: "/academics",
  },
  {
    listIcon: <ForumSharpIcon />,
    listText: "Community",
    listPath: "/community",
  },
  {
    listIcon: <EmailIcon />,
    listText: "Contact Me",
    listPath: "/contact",
  },
  {
    listIcon: <PersonPinCircleIcon />,
    listText: "About Me",
    listPath: "/about",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({
      ...state,
      [slider]: open,
    });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("left", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Vivek Kumar Ghosh" />
      <Typography variant="h5" className={classes.insideContainerHeading}>
        Vivek Kumar Ghosh
      </Typography>
      <Typography variant="p" className={classes.insideContainerElement}>
        Bachelor of Technology
      </Typography>
      <Typography variant="p" className={classes.insideContainerElement}>
        Computer Science
      </Typography>
      <Typography variant="p" className={classes.insideContainerElement}>
        Dehradun, Uttarakhand
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item, key) => {
          return (
            <ListItem button key={key} component={Link} to={item.listPath}>
              <ListItemIcon className={classes.listItemIcon}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                primary={item.listText}
                className={classes.listItemText}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box component="nav" className={classes.boxComponent}>
      <AppBar
        position="sticky"
        style={{ background: "#222", position: "fixed" }}
      >
        <Toolbar style={{ display: "flex" }}>
          <IconButton
            onClick={toggleSlider("left", true)}
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: "tan" }} />
          </IconButton>
          <Typography variant="h5" className={classes.topHeading}>
            Vivek Kumar Ghosh
          </Typography>
          <MobileLeftMenuSlider
            onClose={toggleSlider("left", false)}
            open={state.left}
            anchor="left"
          >
            {sideList("left")}
            <Footer />
          </MobileLeftMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
