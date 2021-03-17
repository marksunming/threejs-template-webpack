import { Color, Scene } from "three";

import * as dat from "dat.gui";

function createScene() {
  const scene = new Scene();
  scene.background = new Color("skyblue");

  return scene;
}

export { createScene };
