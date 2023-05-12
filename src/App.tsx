import styled from "styled-components";
import { PlayerAccordion } from "./components/player-accordion/PlayerAccordion";
import { PageContainer } from "./components/page-container/PageContainer";

type AccordionData = {
  title: string;
  content: string;
};
const accordionData: AccordionData[] = [
  { title: "Section 1", content: "Content for section 1 goes here" },
  { title: "Section 2", content: "Content for section 2 goes here" },
  { title: "Section 3", content: "Content for section 3 goes here" },
];

function App() {
  return (
    <PageContainer>
      <h1>Hello, World!</h1>
      <div>
        {accordionData.map((data) => (
          <PlayerAccordion title={data.title} key={data.title}>
            <p>{data.content}</p>
          </PlayerAccordion>
        ))}
      </div>
    </PageContainer>
  );
}

export default App;
