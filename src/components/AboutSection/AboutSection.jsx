import React from "react";
import s from "./AboutSection.module.css";
import { Link } from "react-router-dom";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import Minion from "../../assets/images/minjon.jpg";
import Technologies from "../Technologies/Technologies";

const AboutSection = () => {
  return (
    <section className={s.container}>
      <div className={s.description}>
        <div>
          <h1 className={s.title}>About me</h1>
          <p className={s.text}>
            Hi! I’m a frontend/full-stack developer who loves finding simple
            solutions to complex problems. For me, code is a way to make the
            world more convenient.
          </p>
        </div>

        <div className={s.philosophy}>
          <h2 className={s.subtitle}>My Philosophy</h2>
          <p className={s.text}>
            I believe in clean, readable code and teamwork. I enjoy when a
            project grows alongside the team and brings real value.
          </p>
        </div>
        <div className={s.personal}>
          <h2 className={s.subtitle}>Beyond the Code</h2>
          <p className={s.text}>
            In my free time, I enjoy reading, traveling, and extreme sports
            (rope jumping is my passion). You can also often find me playing
            computer games or planning my next trip.
          </p>
        </div>
        <div className={s.cta}>
          <h2 className={s.subtitle}>Want to know more?</h2>
          <p className={s.text}>Check out my:</p>
          <ul className={s.buttons}>
            <li className={s.list}>
              <MainBtn link="/projects"> Works</MainBtn>
            </li>
            <li className={s.list}>
              <MainBtn link="/service">Service</MainBtn>
            </li>
          </ul>
        </div>
      </div>
      <Technologies />
    </section>
  );
};

export default AboutSection;
