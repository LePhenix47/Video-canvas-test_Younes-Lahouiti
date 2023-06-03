import { colorToReplace } from "../../variables/tracker.variables";
import { log } from "../helper-functions/console.functions";
import { getParent, selectQuery } from "../helper-functions/dom.functions";

export function handleColorRangeChange(event: Event) {
  const input: HTMLInputElement = event.currentTarget as HTMLInputElement;

  const inputColor: string = input.id;

  setInputValueToSpan(input, input.valueAsNumber);

  colorToReplace[inputColor] = input.valueAsNumber;
}

function setInputValueToSpan(input: HTMLInputElement, value: number) {
  const label: HTMLLabelElement = getParent(input) as HTMLLabelElement;
  const span: HTMLSpanElement = selectQuery("span", label) as HTMLSpanElement;

  span.textContent = value.toString();
}
