import { useRecoilValue, useResetRecoilState } from "recoil";
import "./SourceViewer.css";
import { currentSourceAtom } from "../state";

export default function SourceViewer() {
  const currentSource = useRecoilValue(currentSourceAtom);
  const closeViewer = useResetRecoilState(currentSourceAtom);

  return !!currentSource ? (
    <div id="source-viewer">
      <button
        className="navigation-button"
        id="close-source-viewer-button"
        onClick={closeViewer}
      >
        X
      </button>
      {currentSource.endsWith(".png") || currentSource.endsWith(".jpg") ? (
        <img className="source-view" src={currentSource} />
      ) : currentSource.endsWith(".html") ? (
        <iframe className="source-view" src={currentSource} />
      ) : null}
    </div>
  ) : (
    <></>
  );
}
