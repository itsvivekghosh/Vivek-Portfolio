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
  Typography
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#121212",
    height: "auto"
  },
  cardContainer: {
    maxWidth: 400,
    backgroundColor: "tan",
    margin: "2rem auto",
    borderColor: "tan"
  },
  particlesCanva: {
    position: "fixed",
    width: "100%",
    opacity: "0.9"
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  projectDetails: {
    color: "black"
  },
  projectSubDetails: {
    color: "black"
  },
  upArrow: {
    backgroundColor: "tan",
    color: "black"
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
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
  window: PropTypes.func
};

export function Portfolio(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true
              }
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "none",
              out_mode: "out"
            },
            line_linked: {
              enable: false
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 50,
                duration: 2
              }
            }
          }
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
                  alt="TextShot"
                  height="150"
                  image={
                    "https://github.com/itsvivekghosh/textshot/blob/master/TextShot.png?raw=true"
                  }
                />
                <CardContent
                  className={classes.projectDetails}
                  variant="outlined"
                >
                  <Typography gutterBottom variant="h5">
                    TextShot
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    This application is very useful in certain circumstances
                    where we have to immediately capture the text from the
                    picture.Inorder to do that we generally write the text from
                    the image by taking a note of every word. But, i have
                    designed an application that can take the take to your
                    clipboard of your machine and can be copied to any Text
                    Editor. This feature is tested on Windows 10 and Ubuntu
                    10.04 Operating Systems. The Data is also secured that means
                    that there no data theft. The Application has minor
                    per-requisites that is mentionedin my gitHub repo.
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
                  image={
                    "https://github.com/itsvivekghosh/Hand-Sign_Detection_and_Prediction/raw/master/Outputs/ONE.png"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Hand-Sign Detection
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.projectSubDetails}
                    component="p"
                  >
                    This Project will recognize the Sign made by the Hand. the
                    Sign can various Numbers from 0 to 9. This is made by Using
                    Deep Learning, Computer Vision and Tensorflow. This
                    application is very helpful for detecting the signs who does
                    not have knowledge of knowing visually impaired Languages.
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
                  image={
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--qJ3sPTzg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--1u3Uz9sp--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/ojmek5e5tihf1p655ju6.png"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Face-Mask Detector
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    During COVID 19 Pandemic, i designed an applicaion that
                    detects the masks on human faces. This application detects
                    the mask on the face and tells that the warning to wear the
                    Mask.
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
                  image={
                    "https://github.com/itsvivekghosh/YOLO_Object_Detection/raw/master/room1.png"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Object Detector
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    This application Detects the Objects in its surroundings and
                    tells the probabilities of each object with the Masking.
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
    </React.Fragment>
  );
}

export default Portfolio;
