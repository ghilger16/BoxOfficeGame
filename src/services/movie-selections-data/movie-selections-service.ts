import { IMovieSelection } from "../types";

class MovieSelectionsService {
  async getMovieSelectionsByUser(userName: string): Promise<IMovieSelection[]> {
    try {
      const response = await fetch(
        `http://localhost:8080/users/${userName}/movie-selections`
      );

      return response.json();
    } catch (error: any) {
      throw new Error(
        `Failed to fetch movie selections for user ${userName}: ${error.message}`
      );
    }
  }

  async createUserSelection(
    userName: string,
    movieSelections: IMovieSelection[]
  ): Promise<void> {
    try {
      const response = await fetch("http://localhost:8080/userSelections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, movieSelections }),
      });
    } catch (error: any) {
      throw new Error(`Failed to create user selection: ${error.message}`);
    }
  }
}

export const movieSelectionsService = new MovieSelectionsService();
