import { Requests } from "@/network/requests";
import Screen from "@/screens/search-posts-by-term";
import { SearchPostsByTermQuery } from "@/typings/wp";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";

type TProps = {
  data: SearchPostsByTermQuery;
  term: string;
};
export default function TagPage(props: TProps) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>loading...</div>;
  }
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
