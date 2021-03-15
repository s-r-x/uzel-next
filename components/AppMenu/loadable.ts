import dynamic from "next/dynamic";

const AppMenuLoadable = dynamic(() => import("_c/AppMenu"), { ssr: false });
export default AppMenuLoadable;
