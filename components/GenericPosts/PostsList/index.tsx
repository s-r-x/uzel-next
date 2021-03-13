import { memo } from "react";
import Post from "../Post";
type TPageProps = {
  page: any;
};
const Page = memo((props: TPageProps) => {
  return (
    <>
      {props.page.posts.nodes.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
});

type TPostsListProps = {
  pages: any[];
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
