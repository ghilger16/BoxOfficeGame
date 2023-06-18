import styled from "styled-components";
import { PlayerAccordion } from "./components/player-accordion/PlayerAccordion";

import { DrawerItem } from "./components/drawer-item/DrawerItem";
import {
  DavidChenSheet,
  DevindraHardawarSheet,
  JeffCannataSheet,
  PeterScirettaSheet,
} from "./PlayerSheets";
import {
  useGetMovieSelectionsForUser,
  useCreateUserSelection,
} from "./services/movie-selections-data/use-movie-selections-data";

type playerSheet = {
  id: number;
  title: string;
  boxOfficeGross: number;
};

type AccordionData = {
  icon: string;
  title: string;
  score: number;
  content: playerSheet[];
};

const playerSheet: playerSheet[] = [
  { id: 1, title: "Gaurdians", boxOfficeGross: 80000 },
  { id: 1, title: "Guardians", boxOfficeGross: 500000 },
];

const accordionData: AccordionData[] = [
  {
    icon: "DH",
    title: "Devindra Hardawar",
    score: 400,
    content: DevindraHardawarSheet,
  },
  {
    icon: "JC",
    title: "Jeff Cannata",
    score: 200,
    content: JeffCannataSheet,
  },
  {
    icon: "PS",
    title: "Peter Sciretta",
    score: 100,
    content: PeterScirettaSheet,
  },

  {
    icon: "DC",
    title: "David Chen",
    score: 300,
    content: DavidChenSheet,
  },
];

const sortByScore = (data: AccordionData[]) =>
  data.sort((a, b) => b.score - a.score);

const sortedData = sortByScore(accordionData);

function App() {
  const { mutate: createUserSelection } = useCreateUserSelection() as any;

  const handleCreateUserSelection = () => {
    if (createUserSelection) {
      createUserSelection({
        userName: "testUser",
        movieSelections: [
          {
            selectionOrder: 1,
            movieTitle: "Die Hard",
            boxOfficeGross: 100000,
          },
          {
            selectionOrder: 2,
            movieTitle: "The Sandlot",
            boxOfficeGross: 300000,
          },
        ],
      });
    }
  };

  return (
    <>
      <button onClick={handleCreateUserSelection}></button>
      <div>
        {sortedData.map((data) => (
          <PlayerAccordion
            icon={data.icon}
            title={data.title}
            score={data.score}
            key={data.title}
          >
            {data.content.map((item) => (
              <DrawerItem
                id={item.id}
                title={item.title}
                boxOfficeGross={item.boxOfficeGross}
              />
            ))}
          </PlayerAccordion>
        ))}
      </div>
    </>
  );
}

export default App;
