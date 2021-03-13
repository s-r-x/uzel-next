import HomeScreen from "../screens/home";
import { gqlClient } from "../network/gqlClient";
import { GET_POSTS_QUERY } from "../network/queries/get-posts";
import { motion, Variants } from "framer-motion";
import { GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps = async (props) => {
  const data = await gqlClient.request(GET_POSTS_QUERY, {
    first: 10,
  });

  return {
    props: {
      pages: [{ posts: data.posts }],
    },
    revalidate: 30,
  };
};
