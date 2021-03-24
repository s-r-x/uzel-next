import { memo } from "react";
import Post from "../Post";
import { TGenericPostsQuery } from "../typings";
type TPageProps = {
  page: TGenericPostsQuery;
};
const Page = memo((props: TPageProps) => {
  return (
    <>
      {props.page.posts.nodes.map((post) => (
        <Post key={post.postId} data={post} />
      ))}
    </>
  );
});

type TPostsListProps = {
  pages: TGenericPostsQuery[];
};

const PostsList = memo((props: TPostsListProps) => {
  return (
    <>
      {props.pages.map((page, idx) => (
        <Page page={page} key={idx} />
      ))}
    </>
  );
});
export default PostsList;
