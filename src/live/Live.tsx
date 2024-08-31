import { useRecoilValue, useResetRecoilState } from "recoil";
import "./Live.css";
import { currentPageAtom } from "../state";

export default function Live() {
  const currentPage = useRecoilValue(currentPageAtom);
  const clearPageState = useResetRecoilState(currentPageAtom);

  return (
    <div
      id="live-pane"
      className={currentPage === "live" ? "active" : "offscreen"}
    >
      <button
        id="live-back-button"
        className="navigation-button"
        onClick={() => clearPageState()}
      >
        {">"}
      </button>
      <div id="events-list">
        <p>
          Upcoming
          <br />
          September 20th
          <br />
          Casa Del Xolo
          <br />
          Details TBA
        </p>
      </div>
    </div>
  );
}
