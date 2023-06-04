import {
  debug,
  error,
  log,
} from "./utils/functions/helper-functions/console.functions";

// Web components
import "./components/web-component.component";
import {
  addClass,
  selectQuery,
  selectQueryAll,
} from "./utils/functions/helper-functions/dom.functions";
import {
  clearOldPaint,
  get2DContext,
  setCanvasSize,
} from "./utils/functions/helper-functions/canvas.functions";
import { playVideo } from "./utils/functions/helper-functions/video.functions";
import { WebCamEffect } from "./utils/classes/effects/effect.class";
import {
  handleColorInput,
  handleColorRangeChange,
  handleDistanceNumberInput,
} from "./utils/functions/event-listeners/event-listeners.functions";
import { colorToReplace } from "./utils/variables/tracker.variables";

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

function addReplacedColorsEventListeners() {
  const inputRangeArray: HTMLInputElement[] = selectQueryAll(
    "input[type=range]"
  ) as HTMLInputElement[];

  for (const input of inputRangeArray) {
    input.addEventListener("input", handleColorRangeChange);
  }

  const numberInput: HTMLInputElement = selectQuery(
    ".index__input--euclidian-distance"
  ) as HTMLInputElement;

  numberInput.addEventListener("input", handleDistanceNumberInput);
}
addReplacedColorsEventListeners();

function addReplacerColorEventListeners() {
  const colorInput: HTMLInputElement = selectQuery(
    "input[type=color]"
  ) as HTMLInputElement;

  colorInput.addEventListener("input", handleColorInput);
}
addReplacerColorEventListeners();

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

    const notAllowedDiv: HTMLDivElement = selectQuery(
      ".index__not-allowed-icon"
    ) as HTMLDivElement;

    addClass(notAllowedDiv, "hide");
  } catch (videoError) {
    error(videoError);

    addClass(video, "hide");
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
  effectHandler.analyzeImage(colorToReplace);
}
