// ScrollUtils.js

import { useSmoothScroll } from "../_context/SmoothScrollProvider";

export const useSmoothScrollToSection = () => {
  const { lenis } = useSmoothScroll();

  const scrollToSection = (sectionId) => {
    if (lenis) {
      lenis.scrollTo(sectionId);
    }
  };

  return scrollToSection;
};
