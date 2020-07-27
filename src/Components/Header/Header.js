import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../../static/avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subTitle: {
    marginBottom: "3rem",
    color: "tan",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Vivek Kumar Ghosh"
        />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Vivek Kumar Ghosh"]}
          backspeed={60}
          typeSpeed={70}
          loop
        />
      </Typography>
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={["Uttaranchal University"]}
          backspeed={50}
          typeSpeed={70}
          loop
        />
      </Typography>

      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={[
            "Machine Learning",
            "Deep Learning",
            "Data Structures",
            "DBMS",
            "ReactJS",
          ]}
          backspeed={50}
          typeSpeed={70}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
