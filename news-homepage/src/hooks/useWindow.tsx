import { useEffect, useState } from "react";

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};
export default useWindowSize;
