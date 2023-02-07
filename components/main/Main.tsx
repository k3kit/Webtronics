import React from "react";
import { Intro } from "../intro/Intro";
import style from "./style.module.scss";
import { AboutUs } from "../aboutUs/AboutUs";

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Intro />
        <AboutUs />
      </div>
    </main>
  );
};
