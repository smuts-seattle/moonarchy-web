import { useRecoilState } from "recoil";
import "./NavigationBar.css";
import { currentPageAtom } from "../state";

export default function NavigationBar() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);

  return (
    <div
      id="navigation-bar"
      className={currentPage === "" ? "active" : "offscreen"}
    >
      <div id="navigation-buttons">
        <button
          className={
            "navigation-button" + (currentPage === "sources" ? " active" : "")
          }
          onClick={() => setCurrentPage("sources")}
        >
          Sources
        </button>
        <button
          className={
            "navigation-button" + (currentPage === "live" ? " active" : "")
          }
          onClick={() => setCurrentPage("live")}
        >
          Live
        </button>
        <a className="navigation-button" href="https://moonarchy.bandcamp.com/">
          Bandcamp
        </a>
      </div>
    </div>
  );
}
