import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Grid,
  Typography,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Avatar,
} from "@material-ui/core";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import Contacts from "@material-ui/icons/Contacts";
import Navbar from "../Navbar/Navbar";
import avatarPicture from "../../static/vivek.jpg";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: "100vh",
    backgroundColor: "#121212",
  },
  aboutMeContainer: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textDecoration: "underlined",
  },
  cardContainer: {
    display: "block",
    maxWidth: 600,
    backgroundColor: "wheat",
    borderColor: "wheat",
  },
  subdetails: {
    display: "block",
    color: "black",
  },
  cardButtons: {
    diplay: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    display: "block",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "0.5rem auto",
  },
  cardHeading: {
    fontWeight: "500",
    textAlign: "center",
    color: "black",
  },
  shareButton: {
    color: "teal",
    backgroundColor: "white",
  },
  contactButton: {
    color: "brown",
    backgroundColor: "white",
  },
  particlesCanva: {
    position: "fixed",
    width: "100%",
    opacity: "0.9",
  },
}));

export function Portfolio(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
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
      <Box className={classes.boxContainer}>
        <Grid container justify="center">
          <Box className={classes.aboutMeContainer}>
            <Typography variant="h5" className={classes.heading}>
              About Me
            </Typography>
            <Card className={classes.cardContainer} variant="outlined">
              <CardActionArea>
                <CardContent variant="outlined">
                  <Avatar
                    src={avatarPicture}
                    className={classes.avatarImage}
                    alt="Vivek Kumar Ghosh"
                  ></Avatar>
                  <Typography variant="h5" className={classes.cardHeading}>
                    Vivek Kumar Ghosh
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.subDetails}
                  >
                    A paragraph is a series of related sentences developing a
                    central idea, called the topic. Try to think about
                    paragraphs in terms of thematic unity: a paragraph is a
                    sentence or a group of sentences that supports one central,
                    unified idea. Paragraphs add one idea at a time to your
                    broader argument.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButtons}>
                <Button
                  size="medium"
                  variant="contained"
                  endIcon={<SendIcon></SendIcon>}
                  className={classes.shareButton}
                  component={Link}
                  to={"#share"}
                >
                  Share Profile
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  component={Link}
                  endIcon={<Contacts></Contacts>}
                  className={classes.contactButton}
                  to={"/contact"}
                >
                  Contact Me
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Portfolio;
