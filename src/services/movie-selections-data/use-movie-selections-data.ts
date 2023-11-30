import React from "react";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { IMovieSelection, IUserMovieSelections } from "../types/types";
import { movieSelectionsService } from "./movie-selections-service";

type UseGetMovieSelectionsForUserResult = UseQueryResult<
  IUserMovieSelections,
  unknown
>;
type useCreateUserSelectionResult = UseMutationResult<
  any,
  Error,
  IUserMovieSelections,
  unknown
>;

export const useGetMovieSelectionsForUser = (
  userName: string
): UseGetMovieSelectionsForUserResult => {
  const getMovieSelectionsByUser = React.useCallback(async () => {
    return await movieSelectionsService.getMovieSelectionsByUser(userName);
  }, [userName]);

  return useQuery("movieSelections", getMovieSelectionsByUser);
};

export const useCreateUserSelection = (): useCreateUserSelectionResult => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, Error, IUserMovieSelections>(
    async (request) =>
      await movieSelectionsService.createUserSelection(
        request.userName,
        request.movieSelections
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("movieSelections");
      },
    }
  );
  return mutation;
};
