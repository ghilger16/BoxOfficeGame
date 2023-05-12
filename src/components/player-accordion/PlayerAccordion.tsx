import React from "react";

import * as Styled from "./PlayerAccordian.styled";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const PlayerAccordion = ({ title, children }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleAccordionClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Styled.RowContainer>
      <Styled.Container>
        <Styled.PlayerAccordian>
          <Styled.Card>
            <Styled.CardHeader>
              <Styled.mb>
                <Styled.PlayerButton onClick={handleAccordionClick}>
                  <Styled.Heading>
                    <Styled.Icon>
                      <Styled.IconSpan>Hi</Styled.IconSpan>
                    </Styled.Icon>
                    <Styled.PlayerTitle> {title}</Styled.PlayerTitle>
                  </Styled.Heading>
                  <Styled.PlayerScore>300</Styled.PlayerScore>
                </Styled.PlayerButton>
                {isExpanded && <div>{children}</div>}
              </Styled.mb>
            </Styled.CardHeader>
          </Styled.Card>
        </Styled.PlayerAccordian>
      </Styled.Container>
    </Styled.RowContainer>
  );
};
