import { colorToReplace } from "../../variables/tracker.variables";
import { log } from "../helper-functions/console.functions";
import { getParent, selectQuery } from "../helper-functions/dom.functions";
import { formatText } from "../helper-functions/string.functions";

export function handleColorRangeChange(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;

  const inputColor: string = input.id;

  setInputValueToSpan(input, input.valueAsNumber);

  colorToReplace[inputColor] = input.valueAsNumber;
}

export function handleColorInput(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;
  log(input.value);

  const formattedValue: string = formatText(input.value, "uppercase");

  setInputValueToSpan(input, formattedValue);
}

function setInputValueToSpan(input: HTMLInputElement, value: number | string) {
  const label: HTMLLabelElement = getParent(input) as HTMLLabelElement;
  const span: HTMLSpanElement = selectQuery("span", label) as HTMLSpanElement;

  span.textContent = value.toString();
}
