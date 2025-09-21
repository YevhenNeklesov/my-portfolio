import React from "react";
import s from "./SocialMedia.module.css";
import SvgIcon from "../SvgIcon";

const SocialMedia = () => {
  return (
    <div className={s.container}>
      <a className={s.link} href="https://www.facebook.com">
        <SvgIcon className={s.icon} name="facebook" size={32} color="#53b4cc" />
      </a>
      <a className={s.link} href="https://instagram.com">
        <SvgIcon
          className={s.icon}
          name="instagram"
          size={32}
          color="#53b4cc"
        />
      </a>
      <a className={s.link} href="https://www.linkedin.com">
        <SvgIcon className={s.icon} name="linkedin" size={32} color="#53b4cc" />
      </a>
    </div>
  );
};

export default SocialMedia;
