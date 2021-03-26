import HomeScreen from "../screens/home";
import { GetStaticProps } from "next";
import { Requests } from "@/network/requests";
import { GetPostsQuery } from "@/typings/wp";
import { useRouter } from "next/dist/client/router";
import PostsListPlaceholder from "@/components/Placeholder/PostsList";

type TProps = {
  data: GetPostsQuery;
};
export default function Home(props: TProps) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <PostsListPlaceholder uniqueKey="home-placeholder" />;
  }
  return <HomeScreen data={props.data} />;
}

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const data = await Requests.getPosts();
  return {
    props: { data },
    revalidate: 30,
  };
};
