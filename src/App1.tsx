import styled from "styled-components";
import { PlayerAccordion } from "./components/player-accordion/PlayerAccordion";
import { PageContainer } from "./components/page-container/PageContainer";
import { DrawerItem } from "./components/drawer-item/DrawerItem";
import {
  DavidChenSheet,
  DevindraHardawarSheet,
  JeffCannataSheet,
  PeterScirettaSheet,
} from "./PlayerSheets";
import { NavMenu } from "./components/nav-menu/NavMenu";

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
  return (
    <>
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
