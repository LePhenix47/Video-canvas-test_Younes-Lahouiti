import {
  colorToReplace,
  replacerColor,
} from "../../variables/tracker.variables";
import { log } from "../helper-functions/console.functions";
import {
  getParent,
  selectQuery,
  setStyleProperty,
} from "../helper-functions/dom.functions";
import { formatText } from "../helper-functions/string.functions";

export function handleColorRangeChange(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;

  const inputColor: string = input.id;

  setInputValueToOutput(input, input.valueAsNumber);

  colorToReplace[inputColor] = input.valueAsNumber;

  const previewColorDiv: HTMLDivElement = selectQuery(
    ".index__previewed-color"
  ) as HTMLDivElement;

  setStyleProperty(
    "--_bg-color",
    `rgb(${colorToReplace.red},${colorToReplace.green},${colorToReplace.blue})`,
    previewColorDiv
  );
}

export function handleColorInput(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;
  log(input.value);

  const formattedValue: string = formatText(input.value, "uppercase");

  setInputValueToOutput(input, formattedValue);

  replacerColor.hexValue = formattedValue;
}

export function handleDistanceNumberInput(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;

  replacerColor.threshold = input.valueAsNumber;
}

function setInputValueToOutput(
  input: HTMLInputElement,
  value: number | string
) {
  const label: HTMLLabelElement = getParent(input) as HTMLLabelElement;
  const output: HTMLOutputElement = selectQuery(
    "output:not(.popup__text)",
    label
  ) as HTMLOutputElement;

  output.textContent = value.toString();
}
