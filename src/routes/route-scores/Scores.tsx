import { DrawerItem } from "../../components/drawer-item/DrawerItem";
import { PlayerAccordion } from "../../components/player-accordion/PlayerAccordion";
import { useGetMovieSelectionsForUser } from "../../services/movie-selections-data/use-movie-selections-data";

export const Scores: React.FC = () => {
  const { data: UserSelections } = useGetMovieSelectionsForUser("Jeff");
  console.log(UserSelections);
  return (
    <>
      <PlayerAccordion icon={"JC"} title={"Jeff"} score={400} key={"jeff"}>
        {UserSelections?.movieSelections.map((movie) => (
          <DrawerItem
            id={movie.selectionOrder}
            title={movie.movieTitle}
            boxOfficeGross={movie.boxOfficeGross}
          />
        ))}
      </PlayerAccordion>
    </>
  );
};
