import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { Requests } from "@/network/requests";
import { useAppMenuStore } from "@/stores/app-menu";
import shallow from "zustand/shallow";

const DELAY = 1000;
export const usePrefetchRequiredData = () => {
  const client = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!client.getQueryData("tags")) {
        client.prefetchQuery("tags", () => Requests.getTags());
      }
      if (!client.getQueryData("observations")) {
        client.prefetchInfiniteQuery("observations", () =>
          Requests.getLatestObservations()
        );
      }
      if (!client.getQueryData("latest-comments")) {
        client.prefetchQuery("latest-comments", () =>
          Requests.getLatestComments()
        );
      }
    }, DELAY);
    return () => clearTimeout(timeoutRef.current);
  }, []);
};
export const useKeyboardControls = () => {
  const [isOpen, close] = useAppMenuStore(
    (state) => [state.isOpen, state.close],
    shallow
  );
  useEffect(() => {
    if (isOpen) {
      const listener = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };
      document.addEventListener("keyup", listener);
      return () => document.removeEventListener("keyup", listener);
    }
  }, [isOpen]);
};
