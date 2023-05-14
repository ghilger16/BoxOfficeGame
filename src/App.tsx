import styled from "styled-components";
import { PlayerAccordion } from "./components/player-accordion/PlayerAccordion";
import { PageContainer } from "./components/page-container/PageContainer";
import { DrawerItem } from "./components/drawer-item/DrawerItem";
type playerSheet = {
  orderNumber: number;
  title: string;
  boxOfficeGuess: number;
};

type AccordionData = {
  icon: string;
  title: string;
  score: number;
  content: playerSheet[];
};

const playerSheet: playerSheet[] = [
  { orderNumber: 1, title: "Guardians", boxOfficeGuess: 500000 },
  { orderNumber: 1, title: "Guardians", boxOfficeGuess: 500000 },
];

const accordionData: AccordionData[] = [
  {
    icon: "GH",
    title: "Section 1",
    score: 100,
    content: playerSheet,
  },
  {
    icon: "GH",
    title: "Section 2",
    score: 200,
    content: playerSheet,
  },
  {
    icon: "GH",
    title: "Section 3",
    score: 300,
    content: playerSheet,
  },
];

function App() {
  return (
    <PageContainer>
      <h1>Hello, World!</h1>
      <div>
        {accordionData.map((data) => (
          <PlayerAccordion
            icon={data.icon}
            title={data.title}
            score={data.score}
            key={data.title}
          >
            {data.content.map((item) => (
              <DrawerItem
                orderNumber={item.orderNumber}
                title={item.title}
                boxOfficeGross={item.boxOfficeGuess}
              />
            ))}
          </PlayerAccordion>
        ))}
      </div>
    </PageContainer>
  );
}

export default App;
