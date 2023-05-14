import styled from "styled-components";

interface ButtonProps {
  isExpanded: boolean;
}

export const PlayerAccordian = styled.div`
  margin: 0 auto;
  width: 550px;
`;

export const PlayerButton = styled.button`
  display: flex;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: "white";
`;

export const IconSpan = styled.span`
  font-size: 20px;
  color: "white";
`;

export const PlayerTitle = styled.h3`
  font-size: 16px;
  margin-left: 1rem;
`;

export const PlayerScore = styled.p`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  font-size: 16px;
  padding: 5px 15px;
  margin-right: 15px;
`;
