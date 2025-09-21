import React from "react";
import s from "./Attainments.module.css";
import jefferson from "../../assets/images/jefferson-mp4.mp4";

const Attainments = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="">
            <p className={s.img}>Project name</p>
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
            target="_blank"
          >
            <video autoPlay loop muted playsInline className={s.video}>
              <source src={jefferson} type="video/mp4" />
            </video>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="">
            <p className={s.img}>Project name</p>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="">
            <p className={s.img}>Project name</p>
          </a>
        </li>
        {/* <li className={s.item}>
          <a className={s.link} href="">
            <p className={s.img}>Project name</p>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="">
            <p className={s.img}>Project name</p>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Attainments;
