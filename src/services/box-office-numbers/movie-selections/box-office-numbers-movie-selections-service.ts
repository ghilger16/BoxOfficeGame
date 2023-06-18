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

  async createUserSelection(
    userName: string,
    movieSelections: IMovieSelection[]
  ): Promise<void> {
    const response = await fetch("http://localhost:8080/userSelections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, movieSelections }),
    });
    if (!response.ok) {
      throw new Error(`Failed to create user selection for user ${userName}`);
    }
  }
}

export const boxOfficeMovieSelectionsService =
  new BoxOfficeNumbersMovieSelectionsService();
