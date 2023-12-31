import './style.css';

/**
 * This file is a starting point, you are encourage to edit it to fit your requirements.
 *
 * You can see below the code used to load a scene.
 *
 * Learn more about Polygonjs API: https://polygonjs.com/docs/api/
 *
 */

// This imports the loading function for the scene, from the files that are autogenerated
// by the editor when you save your scene.
import {fetchSceneAndMount_scene_01} from './polygonjs/scenes/scene_01/autogenerated/fetchSceneAndMount';

async function init() {
	// Here we load the scene on the DOM element with the id 'app'.
	const loadedData = await fetchSceneAndMount_scene_01({
		domElement: 'app',
		baseUrl: import.meta.env.BASE_URL,
	});
	const scene = loadedData.scene;
	let lastPingAt = -1;

	// add a callback that will be called on each tick
	scene.registerOnBeforeTick('my-callback', () => {
		const currentTime = scene.time();
		const timeSinceLastPing = scene.time() - lastPingAt;
		// if the last ping was more than 1 second ago, then ping
		if (timeSinceLastPing > 1) {
			lastPingAt = currentTime;
			console.log('ping');
		}
	});
}

init();
