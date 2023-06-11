import styled from "styled-components";
import { PageContainer } from "../page-container/PageContainer";
import { Link } from "react-router-dom";

export const NavMenu = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;

  background-color: #f1f1f1;
`;

export const NavMenuItem = styled(Link)<{ isActive: boolean }>`
  display: inline-block;
  margin: 0 10px;
  padding: 35px 5px;
  position: relative;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  font-size: 20px;

  &::before {
    content: "";
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid
      ${({ isActive }) => (isActive ? "#000" : "transparent")};
    transition: border-bottom-color 0.3s;
  }
`;
