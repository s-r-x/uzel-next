import * as S from "./styled";
import Logo from "../Logo";
import Link from "next/link";

const AppShell: React.FC = (props) => {
  return (
    <div>
      <S.Header>
        <Link href="/">
          <a
            css={`
              display: flex;
              align-items: center;
            `}
          >
            <Logo
              css={`
                width: 32px;
              `}
            />
            <S.SiteTitle>Узелковое письмо</S.SiteTitle>
          </a>
        </Link>
      </S.Header>
      {props.children}
    </div>
  );
};
export default AppShell;
