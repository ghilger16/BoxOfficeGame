import React from "react";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { boxOfficeMovieSelectionsService } from "../box-office-numbers/movie-selections";
import {
  IMovieSelection,
  IUserMovieSelections,
} from "../box-office-numbers/movie-selections/types";

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
    return await boxOfficeMovieSelectionsService.getMovieSelectionsByUser(
      userName
    );
  }, [userName]);

  return useQuery("movieSelections", getMovieSelectionsByUser);
};

export const useCreateUserSelection = (): useCreateUserSelectionResult => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, Error, IUserMovieSelections>(
    async (request) =>
      await boxOfficeMovieSelectionsService.createUserSelection(
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
