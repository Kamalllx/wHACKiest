import { RefObject, useEffect, useState } from "react";
import { theme } from "@/styles";

import { useMounted } from "./useMounted";

/**
 * A hook to determine the navbar colour, based on if the user is currently scrolled past a specific section.
 * @returns the navbar colour
 */
export const useNavColour = (ref: RefObject<HTMLDivElement>): string => {
  const [isPast, setIsPast] = useState<boolean>(false);
  const mounted = useMounted();

  useEffect(() => {
    if (mounted) {
      const scrollContainer = document.getElementById("container");

      const handleScroll = () => {
        if (ref.current) {
          const topPixel = ref.current.getBoundingClientRect().top;
          setIsPast(topPixel < 0);
        }
      };

      scrollContainer?.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref, mounted]);

  return isPast ? theme.colors.text.dark.white : theme.colors.text.light.black;
};

