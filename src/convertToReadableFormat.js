import { keysDels } from "./internal.js";
export function convertToHumanReadable(time) {
  const object = {
    s: ((time * keysDels.s) | 0) % 60,
    m: ((time * keysDels.m) | 0) % 60,
    h: ((time * keysDels.h) | 0) % 24,
    D: ((time * keysDels.D) | 0) % 30,
    M: ((time * keysDels.M) | 0) % 12,
    Y: (time * keysDels.Y) | 0,
  };

  return (
    Object.keys(object)
      .reverse()
      .map((e) => ({ key: e, value: object[e] }))
      .filter((e) => e.value)
      .map((e) => `${e.value}${e.key}`)
      .join(" ")
      .trim() || "Now!"
  );
}
