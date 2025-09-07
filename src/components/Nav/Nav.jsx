import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={s.container}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Nav;
