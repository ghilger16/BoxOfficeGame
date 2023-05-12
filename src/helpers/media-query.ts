/**
 * Utility module to create media queries for different screen sizes.
 * Screen size breakpoints are based on commonly used sizes.
 * Ref: https://screensiz.es/monitor
 */

import { BreakPoint } from "./types/break-point";

const breakpoints = new Map<BreakPoint, number>([
  ["xs", 0],
  ["s", 576],
  ["m", 768],
  ["l", 992],
  ["xl", 1200],
  ["xxl", 1440],
]);

const validateSize = (size: BreakPoint | [BreakPoint, BreakPoint]): void => {
  if (Array.isArray(size)) {
    const [min, max] = size;
    if (!breakpoints.has(min) || !breakpoints.has(max)) {
      throw new Error(`Invalid screen size: ${size}`);
    }
  } else {
    if (!breakpoints.has(size)) {
      throw new Error(`Invalid screen size: ${size}`);
    }
  }
};

const mq = (size: BreakPoint | [BreakPoint, BreakPoint]): string => {
  validateSize(size);
  const [min, max] = Array.isArray(size) ? size : [size, size];
  const minWidth = breakpoints.get(min)!;
  const maxWidth = breakpoints.get(max)! - 1;

  return `@media only screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
};

export const mediaQuery = {
  min: Object.fromEntries(
    Object.entries(breakpoints).map(([key]) => [
      key,
      mq([key as BreakPoint, "xxl"]),
    ])
  ),
  max: Object.fromEntries(
    Object.entries(breakpoints).map(([key]) => [
      key,
      mq(["xs", key as BreakPoint]),
    ])
  ),
  between: (start: BreakPoint, end: BreakPoint) => mq([start, end]),
};
