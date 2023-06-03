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
import { WebCamEffect } from "./utils/classes/effects/effect.class";

/**
 * The canvas element.
 * @type {HTMLCanvasElement}
 */
const canvas: HTMLCanvasElement = selectQuery("canvas") as HTMLCanvasElement;

// window.addEventListener("resize", resizeCanvas);
// function resizeCanvas() {
//   log("resize");
//   setCanvasSize(canvas, video.clientWidth, video.clientHeight);
// }

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
  changePixelsOnVideo();

  requestAnimationFrame(animate);
}

/**
 * The effect handler.
 * @type {WebCamEffect}
 */
let effectHandler: WebCamEffect = new WebCamEffect(canvas, video);

/**
 * Draws the image on the canvas using the effect handler.
 */
function changePixelsOnVideo() {
  effectHandler.drawImageOnCanvas();
}
