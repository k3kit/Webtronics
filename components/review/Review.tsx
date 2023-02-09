import React from "react";
import styles from "./review.module.scss";
import { Slider } from "../slider/Slider";
import review1 from "../../public/assets/images/man 1.png";
import review2 from "../../public/assets/images/man 2.png";
import review3 from "../../public/assets/images/woman 1.png";
import { LandingSections } from "../footer/Footer";

const ReviewItems = [
  {
    image: review1,
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    title: "Best courses ever",
  },
  {
    image: review2,
    text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    title: "Simple and easy",
  },
  {
    image: review3,
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    title: "Amazing teaching",
  },
];
export const Review = () => {
  return (
    <section className={styles.wrapper} id={LandingSections.REVIEW}>
      <h2 className={styles.title}>Review</h2>
      <Slider items={ReviewItems} />
    </section>
  );
};
