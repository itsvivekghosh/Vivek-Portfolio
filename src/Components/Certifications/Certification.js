import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import project1 from "../../static/coffee-apple.jpg";
import project2 from "../../static/coffee-apple.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#121212",
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 350,
    backgroundColor: "tan",
    margin: "2rem auto",
    borderColor: "tan",
  },
  particlesCanva: {
    position: "fixed",
    width: "100%",
    opacity: "0.9",
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  projectDetails: {
    color: "black",
  },
  projectSubDetails: {
    color: "tomato",
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

export function Portfolio(props) {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "none",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
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
                distance: 50,
                duration: 2,
              },
            },
          },
        }}
      />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="projecet 1"
                  height="140"
                  image={project1}
                />
                <CardContent
                  className={classes.projectDetails}
                  variant="outlined"
                >
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    Project Details
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share
                </Button>
                <Button size="medium" variant="outlined">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="projecet 1"
                  height="140"
                  image={project2}
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.projectSubDetails}
                    component="p"
                  >
                    Project Details
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share
                </Button>
                <Button size="medium" variant="outlined">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="projecet 1"
                  height="140"
                  image={project1}
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    Project Details
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share
                </Button>
                <Button size="medium" variant="outlined">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="projecet 1"
                  height="140"
                  image={project1}
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    Project Details
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share
                </Button>
                <Button size="medium" variant="outlined">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <ScrollTop {...props}>
          <Fab
            size="large"
            aria-label="Scroll back to top"
            className={classes.upArrow}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </div>
  );
}

export default Portfolio;
