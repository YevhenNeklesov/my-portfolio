import React from "react";
import s from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={s.container}>
      <a className={s.link} href="facebook.com">
        F
      </a>
      <a className={s.link} href="instagram.com">
        I
      </a>
      <a className={s.link} href="linkedin.com">
        LI
      </a>
    </div>
  );
};

export default SocialMedia;
