import React from "react";
import s from "./StartSection.module.css";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import { Link } from "react-router-dom";
import Minion from "../../assets/images/minjon.jpg";

const StartSection = () => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <h2 className={s.title}>Hi, i'm Yevhen Neklesov</h2>
        <h3 className={s.subtitle}>Fullstack Developer</h3>
        <p className={s.text}>
          I'm a fullstack developer with 5 years of experience. I'm passionate
          about building web applications and I love to solve problems with
          code. I'm always looking for new challenges and new technologies.
        </p>
        <div className={s.linkContainer}>
          <Link className={s.link} to="about">
            Hire me
          </Link>
          <Link className={s.link} to="contact">
            Let's talk
          </Link>
        </div>
      </div>
      <div className={s.imageContainer}>
        <img className={s.img} src={Minion} alt="minion" />
      </div>
    </div>
  );
};

export default StartSection;
