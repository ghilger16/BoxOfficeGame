import React from "react";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { IMovie } from "../types";
import { movieService } from "./movie-service";
import { queryKeys } from "../query-keys";

type UseGetMoviesResult = UseQueryResult<IMovie[], unknown>;

export const useGetMovies = (): UseGetMoviesResult => {
  const getMovies = React.useCallback(async () => {
    const data = await movieService.getMovies();
    return data;
  }, []);

  const result = useQuery(queryKeys.getMovieDataKey(), getMovies);

  return result;
};
