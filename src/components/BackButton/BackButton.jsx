import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./BackButton.module.css";
import SvgIcon from "../SvgIcon";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={s.btn} onClick={() => navigate(-1)}>
      <SvgIcon className={s.icon} color="#53b4cc" name="circle-left" />
    </button>
  );
};

export default BackButton;
