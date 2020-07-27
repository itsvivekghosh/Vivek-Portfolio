import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    width: "100%",
  },
});

export function Index() {
  const classes = useStyles();

  return (
    <div>
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: true,
              },
            },
            size: {
              value: 12,
              random: true,
            },
            move: {
              out_mode: "out",
              speed: 1,
              direction: "none",
            },
            line_linked: {
              enable: false,
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
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
              repulse: {
                distance: 400,
                duration: 1,
              },
              remove: {
                particles_nb: 10,
              },
              bubble: {
                size: 15,
                duration: 1,
                color: "red",
                opacity: 0.4,
                distance: 3,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default Index;
