import { get2DContext } from "../../functions/helper-functions/canvas.functions";
import {
  time,
  timeEnd,
} from "../../functions/helper-functions/console.functions";

export class Effect {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  video: HTMLVideoElement;
  pixelsData: any;

  constructor(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
    this.canvas = canvas;
    this.context = get2DContext(this.canvas, { willReadFrequently: true });

    this.video = video;
  }

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

        const alpha: number = this.pixelsData.data[pixelIndex + 3];

        const isTransparent: boolean = alpha < 10;
        if (isTransparent) {
          continue;
        }
        // Accessing pixel values
        const red: number = this.pixelsData.data[pixelIndex + 0];
        const green: number = this.pixelsData.data[pixelIndex + 1];
        const blue: number = this.pixelsData.data[pixelIndex + 2];

        //We get an approximate value of the brightness of the pixel
        const averageColorBrightness: number = red + green + blue / 3;
        const color: string = `rgb(${red}, ${green}, ${blue})`;
      }
    }
  }
}
