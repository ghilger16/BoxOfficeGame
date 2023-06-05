import React from "react";

import * as Styled from "./DrawerItem.styled";

interface IDrawerItemProps {
  id: number;
  title: string;
  boxOfficeGross: number;
}

export const DrawerItem: React.FC<IDrawerItemProps> = ({
  id,
  title,
  boxOfficeGross,
}) => {
  const formattedGross = boxOfficeGross.toLocaleString();

  return (
    <Styled.DrawerContainer>
      <Styled.Heading>
        <Styled.OrderNumber>{id}</Styled.OrderNumber>
        <Styled.TitleWrapper>
          <Styled.Title>{title}</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.GrossGuess>${formattedGross}</Styled.GrossGuess>
      </Styled.Heading>
    </Styled.DrawerContainer>
  );
};
