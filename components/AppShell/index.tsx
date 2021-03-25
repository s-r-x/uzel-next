import * as S from "./styled";
import AppMenu from "_c/AppMenu/loadable";
import Cursor from "../Cursor/loadable";
import Header from "./Header/loadable";
import TopScrollFab from "_c/TopScrollFab/loadable";
import { useRouteWatcher } from "@/hooks/useRouteWatcher";

const AppShell: React.FC = (props) => {
  useRouteWatcher();
  return (
    <>
      <AppMenu />
      <Cursor />
      <TopScrollFab />
      <Header />
      <S.ChildrenContainer>{props.children}</S.ChildrenContainer>
    </>
  );
};
export default AppShell;
