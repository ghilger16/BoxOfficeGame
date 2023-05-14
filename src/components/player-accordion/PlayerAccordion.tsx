import React from "react";

import * as Styled from "./PlayerAccordian.styled";

interface AccordionProps {
  icon: string;
  title: string;
  score: number;
  children: React.ReactNode;
}

export const PlayerAccordion = ({
  icon,
  title,
  score,
  children,
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleAccordionClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Styled.PlayerAccordian>
      <Styled.PlayerButton
        onClick={handleAccordionClick}
        isExpanded={isExpanded}
      >
        <Styled.Heading>
          <Styled.Icon isExpanded={isExpanded}>
            <Styled.IconSpan isExpanded={isExpanded}>{icon}</Styled.IconSpan>
          </Styled.Icon>
          <Styled.PlayerTitle>{title}</Styled.PlayerTitle>
        </Styled.Heading>
        <Styled.PlayerScore isExpanded={isExpanded}>{score}</Styled.PlayerScore>
      </Styled.PlayerButton>
      {isExpanded ? <div>{children}</div> : null}
    </Styled.PlayerAccordian>
  );
};
