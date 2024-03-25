import { keysValues } from "./internal";

const regExp = /(\d+(\.\d+)?)\s*(s|m|h|D|M|Y)/;

export function convertToMilliseconds(str = "") {
  let sum = 0;

  let array = null;

  while ((array = regExp.exec(str))) {
    const [find, ...args] = array;
    const num = args.shift();
    const key = args.pop();

    str = str.replace(find, "");
    sum += +num * (keysValues[key] || 0);
  }

  return sum;
}
