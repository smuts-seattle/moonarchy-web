import { useSwipeable } from "react-swipeable";
import GrainFilter from "./GrainFilter";
import Moon from "./Moon";
import { useRecoilState } from "recoil";
import { currentPageAtom } from "../state";

export default function Background() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);

  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      if (e.deltaX < -50) {
        if (currentPage === "sources") {
          setCurrentPage("");
        } else {
          setCurrentPage("live");
        }
      }
    },
    onSwipedRight: (e) => {
      if (e.deltaX > 50) {
        if (currentPage === "live") {
          setCurrentPage("");
        } else {
          setCurrentPage("sources");
        }
      }
    },
    onSwipedDown: (e) => {
      if (e.deltaY > 50) {
        if (currentPage === "game") {
          setCurrentPage("");
        }
      }
    },
    onSwipedUp: (e) => {
      console.log(e.deltaY);
      if (e.deltaY < -50) {
        setCurrentPage("game");
      }
    },
  });

  return (
    <div {...handlers} style={{ height: "100%", width: "100%" }}>
      <div style={{ pointerEvents: "none" }}>
        <GrainFilter />
        <Moon />
      </div>
    </div>
  );
}
