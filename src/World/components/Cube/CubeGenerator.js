import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { MathUtils, Mesh } from "three";

import * as dat from "dat.gui";

const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
  const geometry = createGeometries();
  // const geometry = new SphereBufferGeometry(1, 32, 32);

  const material = createMaterials();

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  // Debug
  const gui = new dat.GUI();

  const cubeGUI = gui.addFolder("cube");

  cubeGUI.add(cube.position, "x").min(-3).max(3).step(0.01);
  cubeGUI.add(cube.position, "y").min(-3).max(3).step(0.01);
  cubeGUI.add(cube.position, "z").min(-3).max(3).step(0.01);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    // cube.rotation.z += radiansPerSecond * delta;
    // cube.rotation.x += radiansPerSecond * delta;
    // cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
