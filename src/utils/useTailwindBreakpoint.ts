import { useEffect, useState } from "react";

function useTailwindBreakpoint() {
  const getDeviceConfig = (width: number) => {
    if (width < 640) {
      return "xs";
    } else if (width >= 640 && width < 768) {
      return "sm";
    } else if (width >= 768 && width < 1024) {
      return "md";
    } else if (width >= 1024 && width < 1280) {
      return "lg";
    } else if (width >= 1280 && width < 1536) {
      return "xl";
    } else if (width >= 1536) {
      return "2xl";
    }
  };

  const [screenSize, setScreenSize] = useState<string | undefined>("xl");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(getDeviceConfig(window.innerWidth));

      const handleResize = () => {
        setScreenSize(getDeviceConfig(window.innerWidth));
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return screenSize;
}

export default useTailwindBreakpoint;
