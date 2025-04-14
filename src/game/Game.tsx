import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import "./Game.css";
import { currentPageAtom, currentSourceAtom } from "../state";
import { useEffect, useState } from "react";

export default function Sources() {
  const currentPage = useRecoilValue(currentPageAtom);
  const clearPageState = useResetRecoilState(currentPageAtom);

  return (
    <>
      <div
        id="game-pane"
        className={currentPage === "game" ? "active" : "offscreen"}
      >
        <div id="game-wrapper">
          <button
            id="game-back-button"
            className="navigation-button"
            onClick={() => {
              clearPageState();
            }}
          >
            {"^"}
            <div id="save-as-hint">
              Right-click and choose "Save Link As" to download these resources
              for local use
            </div>
          </button>
          <div id="game-list">
            <a
              className="navigation-button gamedoc"
              href="PlayersManual.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Moonarchy: The Silent Age" Player's Manual
            </a>
            <a
              className="navigation-button gamedoc"
              href="mtsa-character-sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Moonarchy: The Silent Age" Character Sheet
            </a>
            <a
              className="navigation-button gamedoc"
              href="GMGuide.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Moonarchy: The Silent Age" Game Master's Guide
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
