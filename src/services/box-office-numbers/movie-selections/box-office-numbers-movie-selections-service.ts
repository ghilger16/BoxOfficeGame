import { IMovieSelection } from "./types";

class BoxOfficeNumbersMovieSelectionsService {
  async getMovieSelectionsByUser(userName: string): Promise<IMovieSelection> {
    const response = await fetch(
      `http://localhost:8080/users/${userName}/movie-selections`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch movie selections for user ${userName}`);
    }
    return response.json();
  }
}

export const boxOfficeMovieSelectionsService =
  new BoxOfficeNumbersMovieSelectionsService();
