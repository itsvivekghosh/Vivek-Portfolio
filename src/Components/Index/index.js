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
              value: 160,
              density: {
                enable: true,
              },
            },
            size: {
              value: 12,
              random: true,
            },
            move: {
              random: true,
              speed: 1,
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
      <Navbar />
      <Header />
    </div>
  );
}

export default Index;
