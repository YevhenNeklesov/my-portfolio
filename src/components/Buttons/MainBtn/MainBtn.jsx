import React, { Children } from "react";
import { Link } from "react-router-dom";
import s from "./MainBtn.module.css";

const MainBtn = () => {
  return (
    <div className={s.container}>
      <button className={s.btn}></button>
    </div>
  );
};

export default MainBtn;
