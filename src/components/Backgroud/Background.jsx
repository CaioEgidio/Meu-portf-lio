import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 }
        },
        background: { color: "transparent" } 
      }}
    />
  );
};

export default Background;
