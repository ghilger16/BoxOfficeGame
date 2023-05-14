import React from "react";

import * as Styled from "./DrawerItem.styled";

interface IDrawerItemProps {
  orderNumber: number;
  title: string;
  boxOfficeGross: number;
}

export const DrawerItem: React.FC<IDrawerItemProps> = ({
  orderNumber,
  title,
  boxOfficeGross,
}) => {
  return (
    <Styled.PlayerAccordian>
      <Styled.Heading>
        <Styled.Icon>
          <Styled.IconSpan>{orderNumber}</Styled.IconSpan>
        </Styled.Icon>
        <Styled.PlayerTitle>{title}</Styled.PlayerTitle>
      </Styled.Heading>
      <Styled.PlayerScore>{boxOfficeGross}</Styled.PlayerScore>
    </Styled.PlayerAccordian>
  );
};
