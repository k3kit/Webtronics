import React, { FC, useCallback, useState } from "react";
import styles from "./slider.module.scss";
import { StaticImageData } from "next/image";
import classNames from "classnames";
import Image from "next/image";
import { ReactSVG } from "react-svg";
export interface CarouselItem {
  text: string;
  title: string;
  image: StaticImageData;
}

interface sliderProps {
  items: CarouselItem[];
}

export const Slider: FC<sliderProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const itemsLength = items.length;
  const hundleNextItem = useCallback(() => {
    setIndex((prev) => {
      if (itemsLength <= prev + 1) return 0;
      return prev + 1;
    });
  }, [itemsLength]);

  const hundlePrevItem = useCallback(() => {
    setIndex((prev) => {
      if (0 > prev - 1) return itemsLength - 1;
      return prev - 1;
    });
  }, [itemsLength]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.description}>
          <h4 className={styles.description__title}>{items[index]?.title}</h4>
          <p className={styles.text}>{items[index]?.text}</p>
        </div>
        <div className={styles.slider__block}>
          <div className={styles.info}>
            <div className={styles.index}>
              <span className={styles.current}>{index + 1}/</span>
              <span className={styles.total}> {itemsLength}</span>
            </div>
            <div className={styles.btn__group}>
              <div className={styles.btn__border}>
                <button onClick={hundleNextItem} className={styles.button}>
                  <ReactSVG src={require("./arrow-l.svg").default.src} />
                </button>
              </div>

              <div className={styles.btn__border}>
                <button onClick={hundlePrevItem} className={styles.button}>
                  <ReactSVG src={require("./arrow-r.svg").default.src} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.image__group}>
            <div className={styles.imageList}>
              {items.map((item, idx) => (
                <div
                  className={classNames(styles.imageContainer, {
                    [styles.currentItem]: idx === index,
                  })}
                  key={item.image.src}
                >
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={item.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
