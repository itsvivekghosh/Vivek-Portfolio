import React from "react";
import PropTypes from "prop-types";
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
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Navbar from "../Navbar/Navbar";
import DialogTitle from "@material-ui/core/DialogTitle";
import avatarPicture from "../../static/vg.jpg";
import ListItem from "@material-ui/core/ListItem";
import Dialog from "@material-ui/core/Dialog";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const shareUrl = "vivekuit.herokuapp.com";
const emails = ["soapmactevis1@gmail.com", "gvivekghosh@gmail.com"];
const useStyles = makeStyles((theme) => ({
  boxContainer: {
    height: "auto",
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
  },
  cardContainer: {
    display: "block",
    maxWidth: 600,
    backgroundColor: "wheat",
    borderColor: "wheat",
  },
  subDetails: {
    display: "block",
    textAlign: "center",
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
  locationButton: {
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
  shareCells: {
    display: "block",
    alignItems: "right",
    backgroundColor: "#e0e0e0",
  },
  shareButton: {
    color: "green",
    backgroundColor: "white",
  },
  optionButtons: {
    display: "flex",
    justifyContent: "center",
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div
        style={{
          backgroundColor: "#e0e0e0",
          color: "black",
          display: "block",
          textAlign: "center",
        }}
      >
        <DialogTitle id="simple-dialog-title">Share My Profile</DialogTitle>
      </div>

      <ListItem className={classes.shareCells}>
        <FacebookShareButton
          url={shareUrl}
          quote={
            "Hello, This is Vivek's Profile and This is Something Interesting.."
          }
          hashtag="#programming #joke"
        >
          <FacebookIcon logoFillColor="white" />
        </FacebookShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={"Sharing a Profile"}
          seperator=" "
          body={"Hello Sir/Madam, this is Vivek Kumar Ghosh's Profile."}
        >
          <EmailIcon></EmailIcon>
        </EmailShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={"Vivek's Profile"}
          hashtags={"#programming"}
          via={"Profile"}
        >
          <TwitterIcon></TwitterIcon>
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={
            "Hello, This is Vivek's Profile and This is Something Interesting.."
          }
          seperator=" "
        >
          <WhatsappIcon></WhatsappIcon>
        </WhatsappShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={"Sharing Vivek's Profile"}
          summary={
            "Hello, This is Vivek's Profile and This is Something Interesting.."
          }
          source="Vivek's Profile"
        >
          <LinkedinIcon></LinkedinIcon>
        </LinkedinShareButton>
      </ListItem>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export function Portfolio(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
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
                    <p>
                      A Developer! A Bachelor Student from Uttaranchal
                      University, Dehradun and a Future Personic Engineer with a
                      number of ideas and creativity and strong passion for
                      self-improvement. I have strong Problem Solving Skills &
                      bring energy, patience, positivity and cultural values to
                      the team. Bookmarked Data Scientist and a Problem-Solver.
                      <br></br> Love Data Activities and Sciences. <br></br>
                      <strong> A Happy Coder!</strong>
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.optionButtons}>
                <Button
                  size="medium"
                  variant="contained"
                  endIcon={<SendIcon></SendIcon>}
                  className={classes.shareButton}
                  onClick={handleClickOpen}
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
                <Button
                  size="medium"
                  variant="contained"
                  endIcon={<LocationOnIcon></LocationOnIcon>}
                  className={classes.locationButton}
                  href="https://goo.gl/maps/zs28WFEbyBbuDNUn9"
                >
                  My Location
                </Button>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Portfolio;
