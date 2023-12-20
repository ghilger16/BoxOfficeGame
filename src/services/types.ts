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

export interface IMovie {
  title: string;
  releaseDate: string;
  genre: string;
  directors: string;
  movieCast: string;
  boxOfficeGross: number;
  productionBudget: number;
  runtime: number;
  description: string;
  posterImageUrl: string;
  averageUserRating: number;
  rating: string;
  productionCompany: string;
  countryOfOrigin: string;
  language: string;
}
