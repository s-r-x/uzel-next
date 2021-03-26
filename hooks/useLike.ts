import { Requests } from "@/network/requests";
import { Storage } from "@/services/storage";
import { useCallback, useMemo, useState } from "react";

type TProps = {
  postId: number;
};
type TLikes = number[];
const STORAGE_KEY = "postLikes";
const useDefaultIsLiked = (props: TProps) => {
  return useMemo(() => {
    return Storage.get<TLikes>(STORAGE_KEY, []).includes(props.postId) ?? false;
  }, [props.postId]);
};
export const useLike = (props: TProps) => {
  const defaultLiked = useDefaultIsLiked(props);
  const [hasLike, setHasLike] = useState(defaultLiked);
  const addLike = useCallback(async () => {
    setHasLike(true);
    Storage.set(STORAGE_KEY, [
      ...Storage.get<TLikes>(STORAGE_KEY, []),
      props.postId,
    ]);
    await Requests.addLike(props);
  }, [props.postId]);
  return {
    hasLike,
    addLike,
  };
};
