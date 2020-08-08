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

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#121212",
    height: "auto",
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
                  image={
                    "https://github.com/itsvivekghosh/mycertfications/blob/master/Python%20for%20Data%20Science%20and%20AI.jpg?raw=true"
                  }
                />
                <CardContent
                  className={classes.projectDetails}
                  variant="outlined"
                >
                  <Typography gutterBottom variant="h5">
                    Python for Data Science
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    <ul>
                      <li>Python</li>
                      <li>Pandas, Numpy, Sklearn</li>
                      <li>Python OOPS Concepts</li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share Cetificate
                </Button>
                <Button size="medium" variant="outlined">
                  See Credentials
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
                    "https://github.com/itsvivekghosh/mycertfications/blob/master/Applied%20Data%20Science%20with%20Python-page-001.jpg?raw=true"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Applied Data Science Specialization
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.projectSubDetails}
                    component="p"
                  >
                    <ul>
                      <li>Python for Data Science</li>
                      <li>Text Mining</li>
                      <li>Machine Learning</li>
                      <li>Data Analysis</li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share Cetificate
                </Button>
                <Button size="medium" variant="outlined">
                  See Credentials
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
                    "https://github.com/itsvivekghosh/mycertfications/blob/master/IBM%20Data%20Science%20Specialization-page-001.jpg?raw=true"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    IBM Data Science Specialization
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    <ul>
                      <li>Tools for Data Science</li>
                      <li>Data Science and Visualization</li>
                      <li>Python for Data Science</li>
                      <li>Using IBM Watson</li>
                      <li>Databases and SQL for Data Science</li>
                      <li>Data Visualization</li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share Cetificate
                </Button>
                <Button size="medium" variant="outlined">
                  See Credentials
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
                    "https://github.com/itsvivekghosh/mycertfications/blob/master/Deep%20Learning%20with%20Python%20Specialization-page-001.jpg?raw=true"
                  }
                />
                <CardContent className={classes.projectDetails}>
                  <Typography gutterBottom variant="h5">
                    Deep Learning Specialization
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.projectSubDetails}
                  >
                    <ul>
                      <li>Neural Networks</li>
                      <li>
                        Hyperparameter Optimization, Regularization and
                        Optimization
                      </li>
                      <li>Convolutional Neural Networks</li>
                    </ul>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" variant="outlined">
                  Share Cetificate
                </Button>
                <Button size="medium" variant="outlined">
                  See Credentials
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
