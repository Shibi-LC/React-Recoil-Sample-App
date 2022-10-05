import * as React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { NavigationSelector } from "../store/NavigationStore";

export const Navigation = () => {
  const navLinks = useRecoilValue(NavigationSelector);
  console.log(navLinks);

  return (
    <nav>
      {navLinks.map((item, index) => (
        <NavLink key={index} to={item.linkPath}>
          {item.linkName}
        </NavLink>
      ))}
    </nav>
  );
};
