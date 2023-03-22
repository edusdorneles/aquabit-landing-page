import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const currentPage = useLocation();
  const currentUrl = window.location.href;

  useEffect(() => {
    if (!currentUrl.includes("#contato")) {
      window.scrollTo(0, 0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage.pathname]);

  return null;
};

export default ScrollToTop;
