import { get2DContext } from "../../functions/helper-functions/canvas.functions";
import {
  time,
  timeEnd,
} from "../../functions/helper-functions/console.functions";
import { floor } from "../../functions/helper-functions/math.functions";

/**
 * Represents an image effect applied to a canvas.
 */
export class WebCamEffect {
  /**
   * The canvas element.
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement;

  /**
   * The 2D rendering context of the canvas.
   * @type {CanvasRenderingContext2D}
   */
  context: CanvasRenderingContext2D;

  /**
   * The video element used as the source for the effect.
   * @type {HTMLVideoElement}
   */
  video: HTMLVideoElement;

  /**
   * The pixel data of the canvas image.
   * @type {ImageData}
   */
  pixelsData: ImageData;
  hue: number;

  /**
   * Creates an instance of the Effect class.
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {HTMLVideoElement} video - The video element.
   */

  constructor(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas, { willReadFrequently: true });

    this.video = video;
    this.hue = 0;
  }

  /**
   * Draws the current frame of the video onto the canvas and converts the canvas image to pixels.
   */
  drawImageOnCanvas() {
    this.context.drawImage(this.video, 0, 0);
    this.pixelsData = this.context.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.analyzeImage();
  }

  /**
   * Converts the canvas image to pixels.
   * @private
   *  @returns {void}
   */
  private analyzeImage(): void {
    for (let i = 0; i < this.pixelsData.data.length; i += 4) {
      const pixelIndex: number = i / 4;

      const posX: number = pixelIndex % this.pixelsData.width;
      const posY: number = floor(pixelIndex / this.pixelsData.width);

      const red: number = this.pixelsData.data[i + 0];
      const green: number = this.pixelsData.data[i + 1];
      const blue: number = this.pixelsData.data[i + 2];
      const alpha: number = this.pixelsData.data[i + 3];

      const hasCondition: boolean = red < 64 && green < 64 && blue < 64;
      if (hasCondition) {
        this.context.fillStyle = "white";
        this.context.fillRect(posX, posY, 2, 2);
      }
    }
  }
}
