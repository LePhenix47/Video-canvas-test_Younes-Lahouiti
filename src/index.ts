import {
  error,
  log,
} from "./utils/functions/helper-functions/console.functions";

//Web components
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

log("Hello world!");

const canvas: HTMLCanvasElement = selectQuery("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = get2DContext(canvas);

const video: HTMLVideoElement = selectQuery("video") as HTMLVideoElement;

async function setVideoToCanvas() {
  try {
    const rawWebcamData: MediaStream =
      await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = rawWebcamData;
    playVideo(video);

    video.addEventListener("loadeddata", startAnimationOnCanvas);
  } catch (videoError) {
    error({ videoError });
  } finally {
  }
}
setVideoToCanvas();

function startAnimationOnCanvas(event: Event) {
  setCanvasSize(canvas, video.clientWidth, video.clientHeight);

  addClass(video, "hide");

  animate();
}

function animate() {
  //   clearOldPaint(context, canvas.width, canvas.height);
  drawImageOnCanvas();

  requestAnimationFrame(animate);
}

function drawImageOnCanvas() {
  context.drawImage(video, 0, 0);
}
