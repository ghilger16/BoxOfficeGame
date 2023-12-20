import { DrawerItem } from "../../components/drawer-item/DrawerItem";
import { PlayerAccordion } from "../../components/player-accordion/PlayerAccordion";
import { useGetMovies } from "../../services";
import { useGetMovieSelectionsForUser } from "../../services/movie-selections-data/use-movie-selections-data";

export const Scores: React.FC = () => {
  const { data } = useGetMovies();
  console.log(data);
  return (
    <>
      {/* <PlayerAccordion icon={"JC"} title={"Jeff"} score={400} key={"jeff"}>
        {UserSelections?.movieSelections.map((movie) => (
          <DrawerItem
            id={movie.selectionOrder}
            title={movie.movieTitle}
            boxOfficeGross={movie.boxOfficeGross}
          />
        ))}
      </PlayerAccordion>
      <PlayerAccordion
        icon={"DH"}
        title={"Devindra"}
        score={400}
        key={"devindra"}
      >
        {devindraSelections?.movieSelections.map((movie) => (
          <DrawerItem
            id={movie.selectionOrder}
            title={movie.movieTitle}
            boxOfficeGross={movie.boxOfficeGross}
          />
        ))}
      </PlayerAccordion> */}
    </>
  );
};
