import { useRecoilValue } from "recoil";
import "./SourceViewer.css";
import { currentSourceAtom } from "../state";

export default function SourceViewer() {
  const currentSource = useRecoilValue(currentSourceAtom);

  return !!currentSource ? (
    <div id="source-viewer">
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
