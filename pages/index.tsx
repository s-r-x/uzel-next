import HomeScreen from "../screens/home";
import { gqlClient } from "../network/gqlClient";
import { GET_POSTS_QUERY } from "../network/queries/get-posts";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
export default function Home(props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <HomeScreen data={props} />
    </motion.div>
  );
}
export async function getStaticProps() {
  const data = await gqlClient.request(GET_POSTS_QUERY, {
    first: 20,
  });

  return {
    props: {
      pages: [{ posts: data.posts }],
    },
    revalidate: 30,
  };
}
