import { get2DContext } from "../../functions/helper-functions/canvas.functions";
import {
  time,
  timeEnd,
} from "../../functions/helper-functions/console.functions";
import { floor } from "../../functions/helper-functions/math.functions";
import { ColorType } from "../../variables/tracker.variables";

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
  }

  /**
   * Converts the canvas image to pixels.
   * @private
   *  @returns {void}
   */
  analyzeImage(
    colorToReplace: ColorType = {
      red: 0,
      green: 0,
      blue: 255,
    }
  ): void {
    for (let i = 0; i < this.pixelsData.data.length; i += 4) {
      const pixelIndex: number = i / 4;

      const posX: number = pixelIndex % this.pixelsData.width;
      const posY: number = floor(pixelIndex / this.pixelsData.width);

      const red: number = this.pixelsData.data[i + 0];
      const green: number = this.pixelsData.data[i + 1];
      const blue: number = this.pixelsData.data[i + 2];
      const alpha: number = this.pixelsData.data[i + 3];

      const currentColor: ColorType = { red, green, blue };

      const hasCondition: boolean = this.checkColorMatch(
        colorToReplace,
        currentColor,
        190
      );
      if (hasCondition) {
        this.context.fillStyle = "yellow";
        this.context.fillRect(posX, posY, 2, 2);
      }
    }
  }

  /**
   * Checks if the squared Euclidean distance between two colors is below a specified threshold.
   *
   * @param {{red:number;green:number;blue:number;}} firstColor - The first color object with `red`, `green`, and `blue` properties.
   * @param {{red:number;green:number;blue:number;}} secondColor - The second color object with `red`, `green`, and `blue` properties.
   * @param {number} [threshold=160] - The threshold value for the squared distance. Default is 160.
   *
   * @returns {boolean} - Returns true if the squared distance is below the threshold also squared, otherwise false.
   */
  private checkColorMatch(
    firstColor: ColorType,
    secondColor: ColorType,
    threshold: number = 160
  ): boolean {
    const squaredDistance: number =
      (firstColor.red - secondColor.red) ** 2 +
      (firstColor.green - secondColor.green) ** 2 +
      (firstColor.blue - secondColor.blue) ** 2;

    threshold = threshold ** 2;

    //For performance reasons we're not using the `Math.sqrt` method
    return squaredDistance < threshold;
  }
}
