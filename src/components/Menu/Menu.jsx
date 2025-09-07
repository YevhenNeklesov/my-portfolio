import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={s.menu}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/about">
        About
      </NavLink>
      <NavLink className={s.link} to="/attainments">
        Attainments
      </NavLink>
      <NavLink className={s.link} to="/service">
        Service
      </NavLink>
      <NavLink className={s.link} to="/projects">
        Projects
      </NavLink>
      <NavLink className={s.link} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Menu;
