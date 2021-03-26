import { QueryKeysConfig } from "@/config/query-keys";
import { Requests } from "@/network/requests";
import { Storage } from "@/services/storage";
import { GetPostBySlugQuery, GetPostCommentsQuery } from "@/typings/wp";
import { useCallback, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import set from "lodash/set";

type TProps = {
  postId: number;
  postSlug: string;
};
type TLikes = number[];
const STORAGE_KEY = "postLikes";
const useDefaultIsLiked = (props: TProps) => {
  return useMemo(() => {
    return Storage.get<TLikes>(STORAGE_KEY, []).includes(props.postId) ?? false;
  }, [props.postId]);
};
export const useLike = (props: TProps) => {
  const client = useQueryClient();
  const mutation = useMutation(() => Requests.addLike(props), {
    onSuccess: () => {
      const data = client.getQueryData<GetPostBySlugQuery>([
        QueryKeysConfig.postBySlug,
        props.postSlug,
      ]);
      if (data) {
        set(data, "post.likesCount", data.post.likesCount + 1);
        client.setQueryData<GetPostCommentsQuery>(
          ["post-by-slug", props.postSlug],
          Object.assign({}, data)
        );
      }
    },
  });
  const defaultLiked = useDefaultIsLiked(props);
  const [hasLike, setHasLike] = useState(defaultLiked);
  const addLike = useCallback(async () => {
    setHasLike(true);
    Storage.set(STORAGE_KEY, [
      ...Storage.get<TLikes>(STORAGE_KEY, []),
      props.postId,
    ]);
    await mutation.mutateAsync();
  }, [props.postId, props.postSlug]);
  return {
    hasLike,
    addLike,
  };
};
