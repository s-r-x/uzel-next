import dynamic from "next/dynamic";

const ScreenTransitionLoadable = dynamic(() => import("."), {
  ssr: false,
});
export default ScreenTransitionLoadable;
