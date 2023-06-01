import {
  error,
  log,
} from "./utils/functions/helper-functions/console.functions";

//Web components
import "./components/web-component.component";
import { selectQuery } from "./utils/functions/helper-functions/dom.functions";
import { get2DContext } from "./utils/functions/helper-functions/canvas.functions";

log("Hello world!");

const canvas: HTMLCanvasElement = selectQuery("canvas") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = get2DContext(canvas);

const video: HTMLVideoElement = selectQuery("video") as HTMLVideoElement;

async function setVideoToCanvas() {
  try {
    const rawWebcamData: MediaStream =
      await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = rawWebcamData;
    video.play();
  } catch (videoError) {
    error({ videoError });
  } finally {
  }
}
