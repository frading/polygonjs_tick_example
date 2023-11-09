import { loadSceneData_scene_01 } from "./loadSceneData.js";

export const loadScene_scene_01 = async function (options = {}) {
  const {
    onProgress,
    domElement,
    configureSceneData,
    autoPlay,
    createViewer,
    printWarnings,
    renderer,
    cameraMaskOverride,
  } = options;
  let sceneData = options.sceneData;

  const baseUrl = options.baseUrl != null ? options.baseUrl : "./";
  const sceneDataRoot =
    options.sceneDataRoot != null
      ? options.sceneDataRoot
      : baseUrl + "/polygonjs/scenes";
  const assetsRoot = options.assetsRoot != null ? options.assetsRoot : baseUrl;
  const libsRootPrefix =
    options.libsRootPrefix != null ? options.libsRootPrefix : baseUrl;

  const runRegister = options.runRegister != null ? options.runRegister : true;
  const loadModules = options.loadModules != null ? options.loadModules : true;

  const moduleNames = loadModules ? [] : [];
  const promises = [
    import("./loadSceneFromSceneData.js"),
    sceneData == null
      ? loadSceneData_scene_01({ onProgress, sceneDataRoot })
      : (() => {
          return new Promise((resolve) => resolve());
        })(),
  ];
  const results = await Promise.all(promises);
  const { Poly, loadSceneFromSceneData_scene_01 } = results[0];
  if (sceneData == null) {
    sceneData = results[1];
  }
  if (configureSceneData) {
    configureSceneData(sceneData);
  }

  const loadedModules = [];
  for (let i = 2; i < results.length; i++) {
    loadedModules.push(results[i]);
  }
  // register modules
  let i = 0;
  for (let moduleName of moduleNames) {
    const moduleNameContainer = moduleName + "Module";
    Poly.registerModule(loadedModules[i][moduleNameContainer], printWarnings);
    i++;
  }

  const loadedData = await loadSceneFromSceneData_scene_01({
    onProgress,
    sceneData,
    domElement,
    runRegister,
    autoPlay,
    createViewer,
    assetsRoot,
    libsRootPrefix,
    printWarnings,
    renderer,
    cameraMaskOverride,
  });
  return loadedData;
};
