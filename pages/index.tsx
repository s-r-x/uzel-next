import HomeScreen from "../screens/home";
import { GetStaticProps } from "next";
import { Requests } from "@/network/requests";
import { GetPostsQuery } from "@/typings/wp";

type TProps = {
  data: GetPostsQuery;
};
export default function Home(props: TProps) {
  return <HomeScreen data={props.data} />;
}

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const data = await Requests.getPosts();
  return {
    props: { data },
    revalidate: 30,
  };
};
