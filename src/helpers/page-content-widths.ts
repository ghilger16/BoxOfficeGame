import { BreakPoint } from "./types/break-point";

export const pageContentWidths: { [key in BreakPoint]: string } = {
  xs: "auto", // mobile
  s: "740px", // tablet
  m: "940px", // regular desktop
  l: "1160px",
  xl: "1160px",
  xxl: "1160px",
};
