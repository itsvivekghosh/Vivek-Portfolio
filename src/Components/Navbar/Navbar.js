import { useState } from "react";
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

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  GitHub,
  Twitter,
  Facebook,
  LinkedIn,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../../Static/avatar.png";
import { makeStyles } from "@material-ui/core/styles";

// CSS STYLE for UI
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "40rem",
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
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
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
            <ListItem button key={key}>
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
              <Apps style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5">Vivek Kumar Ghosh</Typography>
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
