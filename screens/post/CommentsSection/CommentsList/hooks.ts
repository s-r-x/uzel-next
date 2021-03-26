import isempty from "lodash/isEmpty";
import { useMemo } from "react";
import { TComment, THierarchicalComment } from "./typings";
import { I18n } from "@/services/i18n";

const useNormalizedComments = (
  comments: TComment[]
): THierarchicalComment[] => {
  return useMemo(() => {
    if (isempty(comments)) return [];
    return comments.map((comment) => ({
      ...comment,
      children: [],
    }));
  }, [comments]);
};
export const useHierarchicalComments = (
  rawComments: TComment[]
): THierarchicalComment[] => {
  const comments = useNormalizedComments(rawComments);
  return useMemo(() => {
    if (isempty(comments)) return [];
    const findParent = (
      comments: THierarchicalComment[],
      parent: number
    ): THierarchicalComment => {
      if (isempty(comments)) {
        return null;
      }
      const [head, ...tail] = comments;
      return head.databaseId === parent
        ? head
        : findParent([...head.children, ...tail], parent);
    };
    const len = comments.length - 1;
    let current: THierarchicalComment;
    for (let i = len; i >= 0; i--) {
      current = comments[i];
      if (current.parentDatabaseId) {
        for (let j = 0; j <= len; j++) {
          if (j === i) continue;
          const parent = findParent([comments[j]], current.parentDatabaseId);
          if (parent) {
            parent.children.unshift(current);
            comments.splice(i, 1);
            break;
          }
        }
      }
    }
    return comments;
  }, [comments]);
};

export const useAuthorAvatar = (comment: TComment) => {
  return (
    // @ts-ignore
    comment.author.node.avatar?.url ??
    "https://secure.gravatar.com/avatar/a0ada0cde61a3b2a475c592cd5f71393?s=96&d=mm&r=g"
  );
};
export const useCommentsCount = (comments: TComment[]) => {
  return I18n.pluralize(comments?.length || 0, [
    "комментарий",
    "комментария",
    "комментариев",
  ]);
};
