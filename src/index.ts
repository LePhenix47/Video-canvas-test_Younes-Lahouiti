import {
  error,
  log,
} from "./utils/functions/helper-functions/console.functions";

// Web components
import "./components/web-component.component";
import {
  addClass,
  selectQuery,
} from "./utils/functions/helper-functions/dom.functions";
import {
  clearOldPaint,
  get2DContext,
  setCanvasSize,
} from "./utils/functions/helper-functions/canvas.functions";
import { playVideo } from "./utils/functions/helper-functions/video.functions";
import { Effect } from "./utils/classes/effects/effect.class";

/**
 * Logs "Hello world!" to the console.
 */
log("Hello world!");

/**
 * The canvas element.
 * @type {HTMLCanvasElement}
 */
const canvas: HTMLCanvasElement = selectQuery("canvas") as HTMLCanvasElement;

/**
 * The 2D rendering context of the canvas.
 * @type {CanvasRenderingContext2D}
 */
// const context: CanvasRenderingContext2D = get2DContext(canvas);

/**
 * The video element.
 * @type {HTMLVideoElement}
 */
const video: HTMLVideoElement = selectQuery("video") as HTMLVideoElement;

/**
 * Sets the video stream to the canvas element and starts animation.
 * @returns {Promise<void>}
 */
async function setVideoToCanvas(): Promise<void> {
  try {
    /**
     * The raw webcam media stream.
     */
    const rawWebcamData: MediaStream =
      await navigator.mediaDevices.getUserMedia({
        video: true,
      });

    video.srcObject = rawWebcamData;
    playVideo(video);

    video.addEventListener("loadeddata", startAnimationOnCanvas);
  } catch (videoError) {
    error(videoError);
  }
}

setVideoToCanvas();

/**
 * Starts the animation on the canvas.
 * @param {Event} event - The loadeddata event.
 */
function startAnimationOnCanvas(event: Event) {
  setCanvasSize(canvas, video.clientWidth, video.clientHeight);

  addClass(video, "hide");

  animate();
}

/**
 * Animates the canvas.
 */
function animate() {
  drawImageOnCanvas();

  requestAnimationFrame(animate);
}

/**
 * The effect handler.
 * @type {Effect}
 */
let effectHandler: Effect = new Effect(canvas, video);

/**
 * Draws the image on the canvas using the effect handler.
 */
function drawImageOnCanvas() {
  effectHandler.drawImageOnCanvas();
}
