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

const Resume = (props) => {
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
          Professional Experience
        </Typography>

        {/* For TimeLine 2019 */}
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Student Summer Intern
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              NIIT Ltd., Gurugram
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>
                  Interacted with customers professionally by phone, email or
                  in-person to provide information and directed to desired staff
                  members.
                </li>
                <li>
                  Opened, sorted and distributed incoming mail and packages. •
                  Conducted thorough reviews of some operations to devise and
                  deploy improvement strategies, facilitating consistent
                  employees.
                </li>
                <li>
                  Strengthened the storage systems to enhance efficiency and
                  minimize labour requirements.
                </li>
                <li>
                  Produced high-quality documents, spreadsheets and
                  presentations for internal and customer-facing needs using
                  Microsoft Office Tools and Visual Studio.
                </li>
                <li>
                  Designed enjoyable and innovative customized training programs
                  based upon fitness goals.
                </li>
                <li> Ordered and maintained all recreational equipment.</li>
                <li>
                  Designed customized client programs to meet individual fitness
                  needs.
                </li>
                <li>
                  Developed team communications and information for Team
                  meetings.
                </li>
                <li>
                  Worked with Sales customers to understand needs and provide
                  Customary service.
                </li>
                <li>
                  Monitored social media and online sources for industry trends.
                </li>
              </ul>
            </Typography>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Data Analyst Intern
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              KMPG
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Data Quality Assessment.</li>
                <li>Data Insights.</li>
                <li>Data Insights and Presentation.</li>
              </ul>
            </Typography>
          </Box>

          {/* For TimeLine 2020 */}
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2020
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Machine Learning Internship
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                Career Launcher
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tan", textAlign: "left" }}
              >
                <ul>
                  <li>Fundamentals of Finance Markets.</li>
                  <li>Data Visualization.</li>
                  <li>Data Cleaning.</li>
                  <li>Data Modeling and Presentation.</li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Software Engineering Virtual Experience
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              JP Morgan Chase & Co.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan", textAlign: "left" }}
            >
              <ul>
                <li>Establishing Financial Data Feeds</li>
                <li>Front-End Development</li>
                <li>Data Visualization with Perspective.</li>
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

export default Resume;
