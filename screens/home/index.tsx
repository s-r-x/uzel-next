import GenericPosts from "@/components/GenericPosts";
import { GetPostsQuery } from "@/typings/wp";
import { Requests } from "@/network/requests";

const loader = ({ pageParam }: any) =>
  Requests.getPosts({
    after: pageParam,
  });

type TProps = {
  data: GetPostsQuery;
};
export default function HomeScreen(props: TProps) {
  return (
    <>
      <GenericPosts
        initialData={props.data}
        loader={loader}
        uniqueKey="posts"
      />
    </>
  );
}
