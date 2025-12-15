import { useEffect, useState } from "react";

interface Return {
  isMediumOrSmaller: boolean;
  isSmall: boolean;
  height: number;
  width: number;
}

export const useWindowSize = (): Return => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...windowSize,
    isMediumOrSmaller: windowSize.width <= 768,
    isSmall: windowSize.width <= 576,
  };
};
