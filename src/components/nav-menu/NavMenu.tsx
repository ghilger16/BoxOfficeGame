import React from "react";
import * as Styled from "./NavMenu.styled";
import { useLocation } from "react-router";
import { getNavigationLinks } from "./utils";

export const NavMenu: React.FC = ({ ...rest }) => {
  const menuItems = getNavigationLinks();
  const { pathname } = useLocation();
  const [activeMenuItem, setActiveMenuItem] = React.useState("");

  React.useEffect(() => {
    setActiveMenuItem(pathname);
  }, [pathname, setActiveMenuItem]);
  return (
    <div>
      {menuItems && (
        <Styled.NavMenu>
          {menuItems.map((item: any) => (
            <Styled.NavMenuItem
              to={item.link}
              isActive={activeMenuItem === item.label}
            >
              {item.label}
            </Styled.NavMenuItem>
          ))}
        </Styled.NavMenu>
      )}
    </div>
  );
};
