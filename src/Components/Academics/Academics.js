/* eslint-disable */
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#2b2b2b",
  },
  particlesCanva: {
    position: "fixed",
    width: "100%",
    opacity: "0.75",
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "aboslute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-type-of(2n):before": {
        display: "none",
      },
    },
  },
  timeLineBTechYear: {
    textAlign: "center",
    maxWidth: "12rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-type-of(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "upperecase",
  },
  upArrow: {
    backgroundColor: "tan",
    color: "black",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Academics = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 2,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "none",
              out_mode: "none",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />

      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Academics
        </Typography>

        {/* For TimeLine 2019 */}
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              High School
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              St. Mary's Convent Sr. Secondary School, Vikasnagar
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Passed High School with 70% aggregate</li>
                <li>
                  Subjects: Mathematics, Computer Science, Social Studies,
                  English Communication & Science
                </li>
              </ul>
            </Typography>
          </Box>

          {/* For TimeLine 2017 */}
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2017
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Intermediate School
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                St. Mary's Convent Sr. Secondary School, Vikasnagar
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tan", textAlign: "left" }}
              >
                <ul>
                  <li>Passed Intermediate School with 70%</li>
                  <li>
                    Subjects: Physics, Chemistry, Mathematics, Computer Science
                    and English Communication
                  </li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineBTechYear} ${classes.timeLineItem}`}
          >
            2017 - 2021
          </Typography>

          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Bachelor of Technology<br></br> (Computer Science and Engineering)
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Currently Pursuing B.Tech with Computer Science.</li>
                <li>Current Year/Current Semester: 4th/7th</li>
                <li>Course Duration: 4 Years</li>
                <li>Passing Year: 2021</li>
              </ul>
            </Typography>
          </Box>

          <Box component="div" className={classes.timeLineItem}>
            {/* 1st Semester */}
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              1st Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 2nd Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              2nd Semester Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 3rd Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              3rd Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 4th Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              4th Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 5th Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              5th Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 6th Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              6th Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>

          {/* 7th Semester */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              7th Semester
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Uttaranchal Universiy, Dehradun
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Semester Passed with 9.2 CGPA</li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <ScrollTop {...props}>
          <Fab
            className={classes.upArrow}
            size="large"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </>
  );
};

export default Academics;
