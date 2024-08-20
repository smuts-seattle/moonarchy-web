import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import "./Sources.css";
import { currentPageAtom, currentSourceAtom } from "../state";
import SourceViewer from "./SourceViewer";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    fetch("datas.json").then(async (result) => {
      if (result.ok && !sources.length) {
        setSources(await result.json());
      }
    });
  }, []);

  return (
    <>
      <div
        id="sources-pane"
        className={currentPage === "sources" ? "active" : "offscreen"}
      >
        <div id="sources-wrapper">
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
                key={source.title}
                className={
                  "navigation-button source" +
                  (currentSource === source.source ? " active" : "")
                }
                onClick={() => setCurrentSource(source.source)}
              >
                {source.title}
              </button>
            ))}
            <button
              key={"attributions"}
              className={
                "navigation-button source" +
                (currentSource === "attributions" ? " active" : "")
              }
              onClick={() => setCurrentSource("attributions.html")}
            >
              attributions
            </button>
          </div>
        </div>
      </div>
      <SourceViewer />
    </>
  );
}
