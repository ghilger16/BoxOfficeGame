import { IMovie } from "../../services/types";
import * as Styled from "./MovieCard.styled";

interface IMovieCardProps {
  movie: IMovie;
}

export const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Styled.MovieCardContainer>
      <Styled.MovieImage src={movie.posterImageUrl}></Styled.MovieImage>
      <Styled.MovieDetailsSection>
        <Styled.Title>{movie.title}</Styled.Title>
      </Styled.MovieDetailsSection>
    </Styled.MovieCardContainer>
  );
};
