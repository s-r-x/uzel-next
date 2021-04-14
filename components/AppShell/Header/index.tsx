import * as S from "./styled";
import Hamburger from "../Hamburger";
import Logo from "_c/Logo";
import Link from "next/link";
import { useScrollDir, EScrollDir } from "@/hooks/useScrollDir";
import { transition, variants } from "./motion";
import { createPortal } from "react-dom";
import SoundPlayer from "../SoundPlayer";
import ThemeToggler from "../ThemeToggler";
import { DevicesConfig } from "@/config/devices";
import { LinkBuilder } from "@/services/link-builder";

export default function AppShellHeader() {
  const dir = useScrollDir();
  return createPortal(
    <S.Container
      animate={dir === EScrollDir.UP ? "visible" : "hidden"}
      transition={transition}
      variants={variants}
    >
      <Link passHref href={LinkBuilder.build("root")}>
        <a
          aria-label="Домашняя страница"
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
      <div
        css={`
          display: flex;
          align-items: center;
          margin-left: auto;
        `}
      >
        <SoundPlayer
          css={`
            margin-right: 10px;
          `}
        />
        <ThemeToggler
          css={`
            margin-right: 15px;
          `}
        />
        <Hamburger />
      </div>
    </S.Container>,
    document.body
  );
}
