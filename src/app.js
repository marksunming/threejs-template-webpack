import "./style.css";
import World from "./World/World.js";

async function main() {
  // 1. create an instance of the world app
  const container = document.querySelector(".container");

  // create a new world
  const world = new World(container);

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});
