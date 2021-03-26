import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { Requests } from "@/network/requests";
import { useAppMenuStore } from "@/stores/app-menu";
import shallow from "zustand/shallow";
import { QueryKeysConfig } from "@/config/query-keys";

const FETCH_DELAY = 1000;
export const usePrefetchRequiredData = () => {
  const client = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!client.getQueryData(QueryKeysConfig.postTags)) {
        client.prefetchQuery(QueryKeysConfig.postTags, () =>
          Requests.getTags()
        );
      }
      if (!client.getQueryData(QueryKeysConfig.observations)) {
        client.prefetchInfiniteQuery(QueryKeysConfig.observations, () =>
          Requests.getLatestObservations()
        );
      }
      if (!client.getQueryData(QueryKeysConfig.latestComments)) {
        client.prefetchQuery(QueryKeysConfig.latestComments, () =>
          Requests.getLatestComments()
        );
      }
    }, FETCH_DELAY);
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
