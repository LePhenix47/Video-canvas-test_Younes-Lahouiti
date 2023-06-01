import { get2DContext } from "../../functions/helper-functions/canvas.functions";
import {
  time,
  timeEnd,
} from "../../functions/helper-functions/console.functions";

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

  /**
   * Creates an instance of the Effect class.
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {HTMLVideoElement} video - The video element.
   */

  constructor(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas, { willReadFrequently: true });

    this.video = video;
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

    this.convertToPixels();
  }

  /**
   * Converts the canvas image to pixels.
   * @private
   * @param {number} [cellSize=1] - The size of the pixel cells.
   *  @returns {void}
   */
  private convertToPixels(cellSize: number = 1): void {
    for (let y = 0; y < this.pixelsData.height; y += cellSize) {
      for (let x = 0; x < this.pixelsData.width; x += cellSize) {
        const pixelPosX: number = x * 4;
        const pixelPosY: number = y * 4;
        const pixelIndex: number =
          pixelPosX + pixelPosY * this.pixelsData.width;

        // Accessing pixel values
        const red: number = this.pixelsData.data[pixelIndex + 0];
        const green: number = this.pixelsData.data[pixelIndex + 1];
        const blue: number = this.pixelsData.data[pixelIndex + 2];
        const alpha: number = this.pixelsData.data[pixelIndex + 3];

        const currentTotalColor: number = red + green + blue;
        //We get an approximate value of the brightness of the pixel
        const averageColorBrightness: number = currentTotalColor / 3;
        const color: string = `rgb(${red}, ${green}, ${blue})`;
      }
    }
  }
}
