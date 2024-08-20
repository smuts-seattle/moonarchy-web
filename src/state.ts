import { literal, string, stringLiterals, union } from "@recoiljs/refine";
import { atom } from "recoil";
import { urlSyncEffect } from "recoil-sync";

export type Page = "" | "sources" | "live";

export const currentPageAtom = atom<Page>({
  key: "p",
  default: "",
  effects: [
    urlSyncEffect({
      history: "push",
      refine: stringLiterals({
        "": "",
        sources: "sources",
        live: "live",
      }),
    }),
  ],
});

export const currentSourceAtom = atom<string | undefined>({
  key: "s",
  default: undefined,
  effects: [
    urlSyncEffect({
      history: "push",
      syncDefault: false,
      refine: union(string(), literal(undefined)),
    }),
  ],
});
