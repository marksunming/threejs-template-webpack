import { BoxBufferGeometry } from "three";

function createGeometries() {
  const cube = new BoxBufferGeometry(2, 2, 2);

  return cube;
}

export { createGeometries };
