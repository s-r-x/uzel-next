import { useEffect, useRef } from "react";
import { useQueryClient } from "react-query";
import { Requests } from "@/network/requests";

const DELAY = 1000;
export const usePrefetchRequiredData = (enabled: boolean) => {
  const client = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (enabled) {
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
      }
    }, DELAY);
    return () => clearTimeout(timeoutRef.current);
  }, [enabled]);
};
