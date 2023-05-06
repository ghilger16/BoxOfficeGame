import styled, { css } from "styled-components";

export const Heading = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-auto-columns: 280px;
  position-bottom: 20px;
  position-right: 20px;
`;

export const TitleCol = styled.div`
  grid-column-start: 1;
  display: flex;
  align-items: center;
`;

export const Title = styled.div<{ type?: "h3" | "h4" }>`
  display: inline;
  vertical-align: top;

  ${({ type }) =>
    type === "h3"
      ? css`
          color: black;
        `
      : css`
          color: blue;
        `}
`;

export const TitleButtons = styled.p`
  display: inline-block;
  margin-left: 5px;
  display: flex;
`;

export const TitleButton = styled.button.attrs({ type: "button" })`
  display: inline;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid transparent;
  & + & {
    border-left: 1px solid bright-blue;
  }
`;
