export type ColorType = { red: number; green: number; blue: number };
export const colorToReplace: ColorType = {
  red: 0,
  green: 0,
  blue: 255,
};

//We cannot change exported constant values, though we can change object properties
export const replacerColor: { hexValue: string; threshold: number } = {
  hexValue: "#FFFF00",
  threshold: 190,
};
