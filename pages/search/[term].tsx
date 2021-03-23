import { Requests } from "@/network/requests";
import Screen from "@/screens/search-posts-by-term";
import { SearchPostsByTermQuery } from "@/typings/wp";
import { GetServerSideProps } from "next";

type TProps = {
  data: SearchPostsByTermQuery;
  term: string;
};
export default function TagPage(props: TProps) {
  return <Screen term={props.term} data={props.data} />;
}

export const getServerSideProps: GetServerSideProps<TProps> = async (props) => {
  const term = props.params.term as string;
  const data = await Requests.SearchPostsByTerm({
    term,
  });
  return {
    props: { data, term },
  };
};
