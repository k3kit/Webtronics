import React from "react";
import { Intro } from "../intro/Intro";
import style from "./style.module.scss";
import { AboutUs } from "../aboutUs/AboutUs";
import { Technologies } from "../technologies/Technologies";
import { Steps } from "../steps/Steps";

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Intro />
        <AboutUs />
        <Technologies />
        <Steps />
      </div>
    </main>
  );
};
