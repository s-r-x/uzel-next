import * as S from "./styled";
import Hamburger from "../Hamburger";
import Logo from "_c/Logo";
import Link from "next/link";
import { useScrollDir, EScrollDir } from "@/hooks/useScrollDir";
import { AnimatePresence } from "framer-motion";
import { transition, variants } from "./motion";

export default function AppShellHeader() {
  const dir = useScrollDir();
  return (
    <AnimatePresence initial={false}>
      {dir === EScrollDir.UP && (
        <S.Container
          key="app-shell-header"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants}
        >
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
          <Hamburger
            css={`
              margin-left: auto;
            `}
          />
        </S.Container>
      )}
    </AnimatePresence>
  );
}
