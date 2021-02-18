import { useEffect, useState } from "react";
import style from "./ProgressBar.module.css";

function calculateScrollPercentage() {
  const scrollOffset = window.pageYOffset;
  const scrollPercentage = Math.floor((scrollOffset / totalPageHeight()) * 100);

  return scrollPercentage;
}

function totalPageHeight() {
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  return docHeight - windowHeight;
}

export function useScroll() {
  const [percentageScrolled, setPercentageScrolled] = useState(0);

  useEffect(() => {
    const scroll = () => setPercentageScrolled(calculateScrollPercentage());

    document.addEventListener("scroll", scroll);

    return () => document.removeEventListener("scroll", scroll);
  }, []);

  return percentageScrolled;
}

function ProgressBar() {
  const startX = 20;
  const scaleDown = (100 - startX) / 100;
  const percentScroll = startX + useScroll(startX) * scaleDown;

  return (
    <div
      className={style.ProgressBar}
      style={{ width: percentScroll + "%" }}
    ></div>
  );
}

export default ProgressBar;
