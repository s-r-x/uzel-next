import * as S from "./styled";
import Hamburger from "../Hamburger";
import Logo from "_c/Logo";
import Link from "next/link";
import { useScrollDir, EScrollDir } from "@/hooks/useScrollDir";
import { transition, variants } from "./motion";
import { createPortal } from "react-dom";

export default function AppShellHeader() {
  const dir = useScrollDir();
  return createPortal(
    <S.Container
      animate={dir === EScrollDir.UP ? "visible" : "hidden"}
      transition={transition}
      variants={variants}
    >
      <Link passHref href="/">
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
      <Hamburger
        css={`
          margin-left: auto;
        `}
      />
    </S.Container>,
    document.body
  );
}
