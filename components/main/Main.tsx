import React from "react";
import { Intro } from "../intro/Intro";
import style from "./style.module.scss";
import { AboutUs } from "../aboutUs/AboutUs";
import { Technologies } from "../technologies/Technologies";
import { Steps } from "../steps/Steps";
import { Questions } from "../Questions/Questions";
import { Review } from "../review/Review";
import { Gallery } from "../Gallery/Gallery";

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Intro />
        <AboutUs />
        <Technologies />
        <Steps />
        <Questions />
        <Review />
        <Gallery />
      </div>
    </main>
  );
};
