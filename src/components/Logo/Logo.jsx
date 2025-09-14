import React from "react";
import s from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className={s.container}>
    <Link to="/" className={s.link}>
      <h1 className={s.title}>My Portfolio</h1>
    </Link>
  </div>
);

export default Logo;
