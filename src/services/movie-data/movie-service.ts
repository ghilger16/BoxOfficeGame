import { MOVIES_URL } from "../constants";
import { IMovie } from "../types";

class MovieService {
  async getMovies(): Promise<any[]> {
    try {
      const response = await fetch(MOVIES_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      throw new Error(`MovieService: Failed to fetch movies. ${error.message}`);
    }
  }

  async getMovieById(movieId: number): Promise<IMovie> {
    try {
      const response = await fetch(`${MOVIES_URL}/${movieId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      throw new Error(
        `MovieService: Failed to fetch movie by id ${movieId}. ${error.message}`
      );
    }
  }
}

export const movieService = new MovieService();
