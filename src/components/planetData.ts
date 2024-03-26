// const random = (a:any, b:any) => a + Math.random() * b;
// const randomInt = (a:any, b:any) => Math.floor(random(a, b));
// const randomColor = () =>
//   `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

// const planetData = [];
// const totalPlanets = 6;
// for (let index = 0; index < totalPlanets; index++) {
//   planetData.push({
//     id: index,
//     color: randomColor(),
//     xRadius: (index + 1.5) * 4,
//     zRadius: (index + 1.5) * 2,
//     size: random(0.5, 1),
//     speed: random(0.004, 0.009)
//   });
// }

let realisticPlanetData = [
  {
    id: 0, // Mercury
    color: "gray",
    xRadius: (0 + 1.5) * 4,
    zRadius: (0 + 1.5) * 2,
    size: 0.6,
    speed: 0.007
  },
  {
    id: 1, // Venus
    color: "orange",
    xRadius: (1 + 1.5) * 4,
    zRadius: (1 + 1.5) * 2,
    size: 0.9,
    speed: 0.005
  },
  {
    id: 2, // Earth
    color: "blue",
    xRadius: (2 + 1.5) * 4,
    zRadius: (2 + 1.5) * 2,
    size: 1.0,
    speed: 0.008
  },
  {
    id: 3, // Mars
    color: "red",
    xRadius: (3 + 1.5) * 4,
    zRadius: (3 + 1.5) * 2,
    size: 0.7,
    speed: 0.006
  },
  {
    id: 4, // Jupiter
    color: "brown",
    xRadius: (4 + 1.5) * 4,
    zRadius: (4 + 1.5) * 2,
    size: 1.5,
    speed: 0.003
  },
  {
    id: 5, // Saturn
    color: "yellow",
    xRadius: (5 + 1.5) * 4,
    zRadius: (5 + 1.5) * 2,
    size: 1.2,
    speed: 0.004
  },
  {
    id: 6, // Uranus
    color: "lightblue",
    xRadius: (6 + 1.5) * 4,
    zRadius: (6 + 1.5) * 2,
    size: 1.1,
    speed: 0.0025
  },
  {
    id: 7, // Neptune
    color: "blue",
    xRadius: (7 + 1.5) * 4,
    zRadius: (7 + 1.5) * 2,
    size: 1.1,
    speed: 0.002
  },
  {
    id: 8, // Pluto
    color: "lightgray",
    xRadius: (8 + 1.5) * 4,
    zRadius: (8 + 1.5) * 2,
    size: 0.3,
    speed: 0.001
  }
];

export default realisticPlanetData;
