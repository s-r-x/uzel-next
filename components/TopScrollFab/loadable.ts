import dynamic from "next/dynamic";

const TopScrollFabLoadable = dynamic(() => import("."), {
  ssr: false,
});
export default TopScrollFabLoadable;
