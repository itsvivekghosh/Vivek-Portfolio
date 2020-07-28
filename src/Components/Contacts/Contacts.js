/* eslint-disable */
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "../../Components/Navbar/Navbar";
import Particles from "react-particles-js";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "lightgreen",
    borderColor: "lightgreen",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  boxContainer: {
    background: "#121212",
    height: "100vh",
  },
  particlesCanva: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  Facebook: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#1a4566",
      },
    },
  },
  Instagram: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#f037b2",
      },
    },
  },
  GitHub: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "white",
      },
    },
  },
  LinkedIn: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#0384fc",
      },
    },
  },
  Twitter: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#0384fc",
      },
    },
  },
  Youtube: {
    "& .MuiNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#f2273b",
      },
    },
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "wheat",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tomato",
      },
    },
  },
})(TextField);

function sendEmail(e) {
  emailjs.init("user_GAsi4jNQqKCyUllJI85AB");
  e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
  console.log(e);

  emailjs
    .sendForm("gmail", "contact__us", e.target, "user_GAsi4jNQqKCyUllJI85AB")
    .then(
      (result) => {
        console.log(result.text);
        window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const Contacts = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 55,
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
      <Box component="div" className={classes.boxContainer}>
        <form method="post" onSubmit={sendEmail}>
          <Grid container justify="center">
            <Box component="form" className={classes.form}>
              <Typography variant="h5" className={classes.heading}>
                Contact Me
              </Typography>
              <InputField
                fullWidth={true}
                variant="outlined"
                required
                inputProps={{ style: { color: "white" } }}
                label="First Name"
                name="first__name"
                margin="dense"
              />
              <br></br>
              <InputField
                fullWidth={true}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                label="Last Name"
                required
                margin="dense"
                name="last__name"
              />
              <br></br>
              <InputField
                fullWidth={true}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                label="Email"
                name="from__email"
                margin="dense"
                required
              />
              <br></br>
              <InputField
                fullWidth={true}
                inputProps={{ style: { color: "white" } }}
                variant="outlined"
                label="Company Name"
                name="company__name"
                margin="dense"
                required
              />
              <br></br>
              <InputField
                name="message"
                fullWidth={true}
                inputProps={{ style: { color: "white" } }}
                variant="outlined"
                label="Message"
                margin="dense"
                required
              />
              <br></br>
              <Button
                className={classes.button}
                variant="outlined"
                endIcon={<SendIcon />}
                type="submit"
                fullWidth={true}
              >
                Contact Me
              </Button>
              {/* Contact Me on Social Media */}
              <div>
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      paddingTop: "2px",
                      paddingBottom: 0,
                      color: "tan",
                    }}
                  >
                    Connect With Me on Social Media Apps
                  </p>
                </div>
                <IconButton aria-label="delete" className={classes.Facebook}>
                  <a
                    href="https://www.facebook.com/itsvivekghosh/"
                    target="_blank"
                  >
                    <Facebook fontSize="large" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete" className={classes.Instagram}>
                  <a
                    href="https://www.instagram.com/vvivekghosh/"
                    target="_blank"
                  >
                    <Instagram fontSize="large" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete" className={classes.Twitter}>
                  <a
                    href="https://www.twitter.com/itsvivekghosh/"
                    target="_blank"
                  >
                    <Twitter fontSize="large" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete" className={classes.GitHub}>
                  <a
                    href="https://www.github.com/itsvivekghosh/"
                    target="_blank"
                  >
                    <GitHub fontSize="large" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete" className={classes.LinkedIn}>
                  <a
                    href="https://www.linkedin.com/in/itsvivekghosh/"
                    target="_blank"
                  >
                    <LinkedIn fontSize="large" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete" className={classes.Youtube}>
                  <a
                    href="https://www.youtube.com/#itsvivekghosh"
                    target="_blank"
                  >
                    <YouTubeIcon fontSize="large" />
                  </a>
                </IconButton>
              </div>
            </Box>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Contacts;
