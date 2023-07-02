import styled from "styled-components";

interface ButtonProps {
  isExpanded: boolean;
}

export const PlayerAccordion = styled.div`
  margin: 0 auto;
  width: 550px;
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
`;

export const PlayerButton = styled.button<ButtonProps>`
  display: flex;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  background-color: ${(props) => (props.isExpanded ? "#ffe97a" : "white")};
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Icon = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.isExpanded ? "white" : "#ffe97a")};
`;

export const IconSpan = styled.span<ButtonProps>`
  font-size: 20px;
  color: ${(props) => (props.isExpanded ? "#ffe97a" : "white")};
`;

export const PlayerTitle = styled.h3`
  font-size: 16px;
  margin-left: 1rem;
`;

export const PlayerScore = styled.p<ButtonProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  font-size: 16px;
  padding: 5px 15px;
  margin-right: 15px;
  color: ${(props) => (props.isExpanded ? "white" : "black")};
  background: ${(props) => (props.isExpanded ? "#ddbe12" : "white")};
`;
