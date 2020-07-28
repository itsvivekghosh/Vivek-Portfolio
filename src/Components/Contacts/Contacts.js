import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "../../Components/Navbar/Navbar";
import Particles from "react-particles-js";
import emailjs from "emailjs-com";

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
              />
              <br></br>
              <InputField
                fullWidth={true}
                inputProps={{ style: { color: "white" } }}
                variant="outlined"
                label="Company Name"
                name="company__name"
                margin="dense"
              />
              <br></br>
              <InputField
                name="message"
                fullWidth={true}
                inputProps={{ style: { color: "white" } }}
                variant="outlined"
                label="Message"
                margin="dense"
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
            </Box>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Contacts;
