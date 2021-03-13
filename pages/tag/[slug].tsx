import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

export default function TagPage() {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>loading...</div>;
  }
  return <div>tag page</div>;
}

export const getStaticProps: GetStaticProps = async (props) => {
  console.log(props.params.slug);
  const data = {};
  return Promise.resolve({
    props: data,
    revalidate: 120,
  });
};

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
