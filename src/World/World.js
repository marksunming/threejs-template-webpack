import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createCube } from "./components/Cube/CubeGenerator.js";

import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";
import { createControls } from "./systems/controls.js";

let camera, renderer, scene, loop, controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    const { ambientLight, mainLight } = createLights();
    const cube = createCube();

    scene.add(cube, ambientLight, mainLight);

    controls = createControls(camera, renderer.domElement);

    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    loop.updatables.push(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  async init() {}
}

export default World;
