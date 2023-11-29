import { RoutePaths } from "./constants";

export const getNavigationLinks = () => {
  return [
    {
      label: "Scores",
      link: RoutePaths.SCORES,
      dropdown: false,
    },
    {
      label: "Boards",
      link: RoutePaths.BOARDS,
      dropdown: false,
    },
    {
      label: "Rules",
      link: RoutePaths.RULES,
      dropdown: false,
    },
  ];
};
