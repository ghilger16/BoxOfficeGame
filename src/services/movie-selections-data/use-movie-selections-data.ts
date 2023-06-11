import React from "react";
import { UseQueryResult, useQuery } from "react-query";
import { boxOfficeMovieSelectionsService } from "../box-office-numbers/movie-selections";
import { IMovieSelection } from "../box-office-numbers/movie-selections/types";

type UseGetMovieSelectionsForUserResult = UseQueryResult<
  IMovieSelection,
  unknown
>;

export const useGetMovieSelectionsForUser = (
  userName: string
): UseGetMovieSelectionsForUserResult => {
  const getMovieSelectionsByUser = React.useCallback(async () => {
    return await boxOfficeMovieSelectionsService.getMovieSelectionsByUser(
      userName
    );
  }, [userName]);

  return useQuery("movieSelections", getMovieSelectionsByUser);
};
