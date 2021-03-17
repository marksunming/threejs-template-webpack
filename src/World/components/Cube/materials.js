import { MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from "three";
import img from "../../../../static/texture/uv-test-col.png";

function createMaterials() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(img);

  // create a "standard" material
  // const material = new MeshStandardMaterial({ color: "purple" });
  // const material = new MeshBasicMaterial({ color: "red" });

  const material = new MeshStandardMaterial({ map: texture, color: "white" });

  return material;
}

export { createMaterials };
