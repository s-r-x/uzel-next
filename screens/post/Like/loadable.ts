import dynamic from "next/dynamic";

const LikeLoadable = dynamic(() => import("."), {
  ssr: false,
});
export default LikeLoadable;
