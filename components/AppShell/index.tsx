import Header from "./Header";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("_c/Cursor"), { ssr: false });

const AppShell: React.FC = (props) => {
  return (
    <>
      <Cursor />
      <div>
        <Header />
        {props.children}
      </div>
    </>
  );
};
export default AppShell;
