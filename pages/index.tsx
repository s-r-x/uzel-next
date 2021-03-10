import HomeScreen from "../screens/home";
import { gqlClient } from "../network/gqlClient";
import { GET_POSTS_QUERY } from "../network/queries/get-posts";

export default function Home(props) {
  return <HomeScreen data={props} />;
}
export async function getStaticProps() {
  const data = await gqlClient.request(GET_POSTS_QUERY, {
    first: 20,
  });

  return {
    props: {
      pages: [{ posts: data.posts }],
    },
    revalidate: 1,
  };
}
