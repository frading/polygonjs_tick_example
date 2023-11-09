import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1699553138586",
  root: "1675552563896",
  nodes: {
    geo1: "1699553138586",
    ground: "1699553138586",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1699553138586",
    COP: "1675552563896",
    lights: "1699553138586",
    cameras: "1699553138586",
    "cameras/cameraControls1": "1699553138586",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1699553138586",
      fragment: "1699553138586",
      "customDepthMaterial.vertex": "1699553138586",
      "customDepthMaterial.fragment": "1675552563896",
      "customDistanceMaterial.vertex": "1675552563896",
      "customDistanceMaterial.fragment": "1675552563896",
      "customDepthDOFMaterial.vertex": "1675552563896",
      "customDepthDOFMaterial.fragment": "1675552563896",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
