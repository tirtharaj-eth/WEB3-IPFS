import React from "react";
import Particles from 'react-particle-backgrounds'
import settings from "../config/particleConfig";

export default function ParticleBackground() {
    return(
        <Particles className="particle" params={settings}> </Particles>
    )
}