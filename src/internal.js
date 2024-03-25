var v = 1;

export const keysValues = {
  s: (v *= 1000),
  m: (v *= 60),
  h: (v *= 60),
  D: (v *= 24),
  M: (v *= 30),
  Y: (v *= 12),
};

export const keysDels = {
  s: 1 / keysValues.s,
  m: 1 / keysValues.m,
  h: 1 / keysValues.h,
  D: 1 / keysValues.D,
  M: 1 / keysValues.M,
  Y: 1 / keysValues.Y,
};
