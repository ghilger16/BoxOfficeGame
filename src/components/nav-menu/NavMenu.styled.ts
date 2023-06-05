import styled from "styled-components";
import { PageContainer } from "../page-container/PageContainer";
import { Link } from "react-router-dom";

export const NavMenu = styled(PageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  background-color: #f1f1f1;
`;

export const NavMenuItem = styled(Link)<{ isActive: boolean }>`
  display: inline-block;
  margin: 0 10px;
  padding: 35px 5px;
  background-color: ${({ isActive }) => (isActive ? "black" : "blue")};
  a {
    color: "white";
    background-color: ${({ isActive }) => (isActive ? "black" : "blue")};
  }
  a:hover {
    color: "white";
  }
`;
