const Particles = { canvas: {
    canvasFillSpace: false,
    width: 500,
    height: 1000,
    useBouncyWalls: true
  },
  particle: {
    particleCount: 150,
    color: '#ffff',
    minSize: 2,
    maxSize: 5
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 360,
    minSpeed: 5,
    maxSpeed: 10
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.5,
    opacityTransitionTime: 3000
  }
}
export default Particles;