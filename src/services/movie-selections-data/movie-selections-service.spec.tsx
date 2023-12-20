import React from "react";
import { IMovieSelection } from "../types";
import { movieSelectionsService } from "./movie-selections-service";
import { mockIMovieSelection } from "../mocks/mock-movie-selections-data";

// Mocking the fetch function for testing purposes
global.fetch = jest.fn();

const mockUserName = "testUser";

describe("MovieSelectionsService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch movie selections by user", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockIMovieSelection),
    } as Response);

    const result = await movieSelectionsService.getMovieSelectionsByUser(
      mockUserName
    );

    expect(result).toEqual(mockIMovieSelection);
    expect(fetch).toHaveBeenCalledWith(
      `http://localhost:8080/users/${mockUserName}/movie-selections`
    );
  });

  it("should handle errors when fetching movie selections by user", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue({
      message: "error",
    } as unknown as Response);

    await expect(
      movieSelectionsService.getMovieSelectionsByUser(mockUserName)
    ).rejects.toThrowError(
      `Failed to fetch movie selections for user ${mockUserName}: error`
    );
  });

  it("should create user selection", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
    } as Response);

    await movieSelectionsService.createUserSelection(
      mockUserName,
      mockIMovieSelection
    );

    expect(fetch).toHaveBeenCalledWith("http://localhost:8080/userSelections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: mockUserName,
        movieSelections: mockIMovieSelection,
      }),
    });
  });

  it("should handle errors when creating user selection", async () => {
    // Mocking the fetch response for an error scenario
    jest.spyOn(global, "fetch").mockRejectedValue({
      message: "error",
    } as unknown as Response);

    await expect(
      movieSelectionsService.createUserSelection(
        mockUserName,
        mockIMovieSelection
      )
    ).rejects.toThrowError(`Failed to create user selection: error`);
  });
});
