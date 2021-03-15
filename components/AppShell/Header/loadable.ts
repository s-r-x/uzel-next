import dynamic from "next/dynamic";

const AppShellHeaderLoadable = dynamic(() => import("_c/AppShell/Header"), {
  ssr: false,
});
export default AppShellHeaderLoadable;
