declare module "time-convector" {
  /**
   * Converts a string to milliseconds
   * @param str - The string to convert to milliseconds
   * @returns The number of milliseconds
   * @example
   * convertToMilliseconds('3D 2h 5s'); // returns 266405000
   */
  export function convertToMs(str?: string): number;
  /**
   * The string should be in the format of where the unit can be:
   * 'Y' for years,
   * 'M' for months,
   * 'D' for days,
   * 'h' for hours,
   * 'm' for minutes,
   * 's' for seconds.
   * @param ms - The number of milliseconds to convert
   * @returns The string in the human readable format
   * @example
   * convertToReadableFormat(122523000); // returns '1D 10h 2m 3s'
   */
  export function convertToReadableFormat(ms: number): string;
}
