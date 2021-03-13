import HomeScreen from "../screens/home";
import { motion, Variants } from "framer-motion";
import { GetStaticProps } from "next";
import { Requests } from "@/network/requests";
import { GetPostsQuery } from "@/typings/wp";

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
type TProps = {
  data: GetPostsQuery;
};
export default function Home(props: TProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <HomeScreen data={props.data} />
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const data = await Requests.getPosts();
  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
