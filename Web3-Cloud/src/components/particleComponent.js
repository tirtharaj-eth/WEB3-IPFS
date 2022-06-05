import React from "react";
import Particles from "react-particle-backgrounds";
import settings from "../config/particleConfig";

// component for the partcle bg.
export default function ParticleBackground() {
  return (
    <Particles className="particle" params={settings}>
      {" "}
    </Particles>
  );
}
