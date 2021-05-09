import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const is3Cols = useMediaQuery({ query: "(min-width: 1490px)" });
  const is2Cols = useMediaQuery({ query: "(min-width: 1190px)" });
  const is1Cols = useMediaQuery({ query: "(min-width: 800px)" });

  if (is3Cols) return "3-cols";
  if (is2Cols) return "2-cols";
  if (is1Cols) return "1-cols";
  return "fullscreen";
};
