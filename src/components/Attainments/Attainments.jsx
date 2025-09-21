import React from "react";
import s from "./Attainments.module.css";
import jefferson from "../../assets/images/jefferson-mp4.mp4";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Attainments = () => {
  return (
    <div className={s.container}>
      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          rewind: true,
          perMove: 1,
          perPage: 2,
          width: "1000px",
          gap: "20px",
          rewindByDrag: true,
          padding: "5px",
          arrows: false,
          wheel: true,
          reducedMotion: true,
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
        }}
      >
        <div className="custom-wrapper">
          <SplideTrack>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className={s.slide}>
                <a
                  className={s.link}
                  href="https://yevhenneklesov.github.io/red-hot-chili-coders/"
                  target="_blank"
                >
                  {" "}
                  <video autoPlay loop muted playsInline className={s.video}>
                    {" "}
                    <source src={jefferson} type="video/mp4" />{" "}
                  </video>{" "}
                </a>
              </div>
            </SplideSlide>
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

export default Attainments;
