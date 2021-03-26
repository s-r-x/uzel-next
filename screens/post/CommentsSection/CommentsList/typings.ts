import { GetPostCommentsQuery } from "@/typings/wp";

export type TComment = GetPostCommentsQuery["comments"]["nodes"][0];
export type THierarchicalComment = TComment & {
  children?: THierarchicalComment[];
};