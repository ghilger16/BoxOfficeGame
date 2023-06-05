import styled from "styled-components";

interface ButtonProps {
  isExpanded: boolean;
}

export const DrawerContainer = styled.div`
  margin: 0 auto;
  width: 550px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const OrderNumber = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const GrossGuess = styled.p`
  font-size: 16px;
  padding: 5px 15px;
  margin-right: 15px;
`;
