import Header from "./Header";
import dynamic from "next/dynamic";
import * as S from "./styled";
const Cursor = dynamic(() => import("_c/Cursor"), { ssr: false });

const AppShell: React.FC = (props) => {
  return (
    <>
      <Cursor />
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
};
export default AppShell;
