/* eslint-disable */
import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../../static/vivek.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
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
    zIndex: 0.5,
  },
  description: {
    marginTop: "5px",
    color: "tan",
  },
  resumeButton: {
    color: "tomato",
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
          backspeed={30}
          typeSpeed={70}
          loop
        />
      </Typography>

      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={["Bachelor of Technology, Computer Science"]}
          backspeed={30}
          typeSpeed={90}
          loop
        />
      </Typography>

      <Typography className={classes.description} variant="h5">
        <Typed
          strings={["Uttaranchal University", "Dehradun, Uttarakhand, India"]}
          backspeed={30}
          typeSpeed={90}
          loop
        />
      </Typography>

      <Typography className={classes.description} variant="h5">
        <Typed
          strings={[
            "C/C++",
            "Data Science",
            "Machine Learning",
            "Deep Learning",
            "Data Structures and Algorithms",
            "Database Management System",
            "JavaScript",
            "ReactJS",
            "Django",
            "Flask",
            "Operating System",
            "Python",
            "Competitive Programming",
          ]}
          backspeed={30}
          typeSpeed={90}
          loop
        />
        <br></br>
        <br></br>
        <Button
          size="large"
          className={classes.resumeButton}
          component={Link}
          to="/resume"
        >
          Resume
        </Button>
      </Typography>
    </Box>
  );
};

export default Header;
