import { useRecoilState } from "recoil";
import "./App.css";
import Background from "./background/Background";
import Live from "./live/Live";
import NavigationBar from "./navigation/NavigationBar";
import Sources from "./sources/Sources";
import { useSwipeable } from "react-swipeable";
import { currentPageAtom } from "./state";
import Game from "./game/Game";

function App() {
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
    <div {...handlers} id="app-home">
      <Background />
      <NavigationBar />
      <Sources />
      <Live />
      <Game />
    </div>
  );
}

export default App;
