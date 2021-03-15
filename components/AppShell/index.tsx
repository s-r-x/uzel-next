import * as S from "./styled";
import AppMenu from "_c/AppMenu/loadable";
import Cursor from "../Cursor/loadable";
import Header from "./Header/loadable";

const AppShell: React.FC = (props) => {
  return (
    <>
      <AppMenu />
      <Cursor />
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
};
export default AppShell;
