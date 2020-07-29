/* eslint-disable */
import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    width: "100%",
    opacity: "0.75",
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
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "left",
              speed: 0.1,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
              repulse: {
                particles_nb: 2,
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
