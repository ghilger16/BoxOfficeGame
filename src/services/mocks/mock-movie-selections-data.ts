import { IMovieSelection, IUserMovieSelections } from "../types";

export const mockIMovieSelection: IMovieSelection[] = [
  {
    id: 21,
    selectionOrder: 1,
    movieTitle: "Guardians of the Galaxy",
    boxOfficeGross: 350000,
  },
  {
    id: 25,
    selectionOrder: 4,
    movieTitle: "Spider-Man: Across the Spider-Verse",
    boxOfficeGross: 200000,
  },
];

export const mockIUserMovieSelection: IUserMovieSelections = {
  id: 12,
  movieSelections: mockIMovieSelection,
  userName: "Jeff",
};
