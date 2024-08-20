import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import "./Sources.css";
import { currentPageAtom, currentSourceAtom } from "../state";
import SourceViewer from "./SourceViewer";
import { useState } from "react";

export interface Source {
  title: string;
  source: string;
}

export default function Sources() {
  const currentPage = useRecoilValue(currentPageAtom);
  const [currentSource, setCurrentSource] = useRecoilState(currentSourceAtom);
  const clearSourceState = useResetRecoilState(currentSourceAtom);
  const clearPageState = useResetRecoilState(currentPageAtom);

  const [sources, setSources] = useState<Source[]>([]);
  fetch("datas.json").then(async (result) => {
    if (result.ok) {
      setSources(await result.json());
    }
  });

  return (
    <>
      <SourceViewer />
      <div
        id="sources-pane"
        className={currentPage === "sources" ? "active" : "offscreen"}
      >
        <button
          id="sources-back-button"
          className="navigation-button"
          onClick={() => {
            clearPageState();
            clearSourceState();
          }}
        >
          {"<"}
        </button>
        <div id="sources-list">
          {sources.map((source) => (
            <button
              className={
                "navigation-button source" +
                (currentSource === source.source ? " active" : "")
              }
              onClick={() => setCurrentSource(source.source)}
            >
              {source.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
