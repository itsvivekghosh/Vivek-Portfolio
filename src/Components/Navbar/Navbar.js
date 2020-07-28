import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import MobileLeftMenuSlider from "@material-ui/core/Drawer/Drawer";
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

import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../../static/avatar.png";
import { makeStyles } from "@material-ui/core/styles";

// CSS STYLE for UI
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 350,
    background: "#2d2d2d",
    height: "50rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  listText: {
    color: "tan",
  },
  topHeading: {
    textColor: "tan",
    paddingTop: "35px",
    paddingBottom: "30px",
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
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contact",
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
      <Divider />
      <List>
        {menuItems.map((item, key) => {
          return (
            <ListItem button key={key} component={Link} to={item.listPath}>
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                primary={item.listText}
                className={classes.listItem}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Box component="nav">
        <AppBar position="sticky" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <Apps style={{ color: "tan" }} />
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
            </MobileLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
