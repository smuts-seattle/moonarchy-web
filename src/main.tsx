import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { RecoilURLSyncJSON } from "recoil-sync";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <RecoilURLSyncJSON location={{ part: "queryParams" }}>
        <App />
      </RecoilURLSyncJSON>
    </RecoilRoot>
  </StrictMode>
);
