import React, { Fragment, useEffect, useState } from "react";
import { Flex } from "vcc-ui";
import useWindowSize from "../../hooks/use-window-size";
import style from "./Slider.module.css";

interface SliderProps {
  length: number;
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ length, children }) => {
  const [nav, setNav] = useState(0);

  const [button, setButton] = useState({
    nextBtn: false,
    prevBtn: false,
  });

  const { isMobile, isDesktop } = useWindowSize();

  const desktopSlideSize = (length - 4) * -100;
  const mobileSlideSize = (length - 1) * -100;

  useEffect(() => {
    setButton({
      prevBtn: nav === 0,
      nextBtn: (isDesktop && nav === desktopSlideSize) || (isMobile && nav === mobileSlideSize),
    });
  }, [nav, isDesktop, isMobile, desktopSlideSize, mobileSlideSize]);

  // Reset navigation and button state when length changes
  useEffect(() => {
    setNav(0);
    setButton({ prevBtn: true, nextBtn: false });
  }, [length]);

  const navNextHandler = () => {
    if ((isDesktop && nav > desktopSlideSize) || (isMobile && nav > mobileSlideSize)) {
      setNav(nav - 100);
    }
  };

  const navBackHandler = () => {
    if (nav < 0) {
      setNav(nav + 100);
    }
  };

  const navBulletHandler = (index: number) => {
    setNav(index * -100);
  };


  const bullets = [];
  for (let i = 0; i < length; i++) {
    bullets.push(
      <li key={i}>
        <button
          className={style.bullet}
          onClick={() => navBulletHandler(i)}
          onKeyPress={(e) => e.key === "Enter" && navBulletHandler(i)}
          aria-label={`Go to slide ${i + 1}`}
          type="button"
        ></button>
      </li>
    );
  }

  return (
    <Fragment>
      <Flex extend={{ overflow: "hidden" }}>
        <Flex extend={{ flexDirection: "row" }} className={style.slider} style={{ transform: `translateX(${nav}%)` }}>
          {children}
        </Flex>
      </Flex>
      {isDesktop && (
        <Flex extend={{ flexDirection: "row-reverse" }}>
          <button
            className={style.nav}
            onClick={navNextHandler}
            onKeyPress={(e) => e.key === "Enter" && navNextHandler}
            aria-label="Next"
            type="button"
            disabled={button.nextBtn}
          ></button>

          <button
            className={`${style.nav} ${style.navLeft}`}
            onClick={navBackHandler}
            onKeyPress={(e) => e.key === "Enter" && navBackHandler}
            aria-label="Previous"
            type="button"
            disabled={button.prevBtn}
          ></button>
        </Flex>
      )}
      {isMobile && (
        <Flex extend={{ alignItems: "center", justifyContent: "center" }}>
          <ul className={style.navBullet}>{bullets}</ul>
        </Flex>
      )}
    </Fragment>
  );
};

export default Slider;
