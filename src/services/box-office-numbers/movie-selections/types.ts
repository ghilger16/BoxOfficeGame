export interface IMovieSelection {
  id: number;
  selectionOrder: number;
  movieTitle: string;
  boxOfficeGross: number;
}

export interface IUserMovieSelections {
  id: number;
  userName: string;
  movieSelections: IMovieSelection[];
}
