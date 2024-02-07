import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize() {
  // Initialize state with width and height possibly undefined
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function resizeHandler() {
      // Directly update the state with window dimensions
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size and add event listener for resize events
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const isDesktop = (windowSize.width || 0) >= 1024;
  const isTablet = (windowSize.width || 0) >= 768 && (windowSize.width || 0) < 1024;
  const isMobile = (windowSize.width || 0) < 768;

  return { windowSize, isDesktop, isTablet, isMobile };
}

export default useWindowSize;
