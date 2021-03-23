import { ShareIcon } from "@/components/Icon";
import * as S from "./styled";
import { CircleButton } from "_c/Button";
import { motion } from "framer-motion";
import { ShareConfig } from "./config";
import { useState } from "react";
import { TShareProps } from "./typings";
import { useShareProviders } from "./hooks";
import ShareProviderButton from "./ShareProviderButton";

const polarToCartesian = (angle: number, hyp: number) => ({
  x: Math.cos(angle) * hyp,
  y: Math.sin(angle) * hyp,
});

export default function PostShare(props: TShareProps) {
  const [opened, setOpened] = useState(false);
  const providers = useShareProviders(props);
  return (
    <S.Container>
      <CircleButton
        title="Поделиться"
        onClick={() => setOpened(!opened)}
        css={`
          --btn-size: 64px;
          position: relative;
          z-index: 2;
        `}
      >
        <ShareIcon size={32} />
      </CircleButton>
      <S.ShareButtonsContainer
        animate={opened ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.02,
        }}
      >
        {providers.map((provider, idx) => (
          <ShareProviderButton
            isActive={opened}
            idx={idx}
            length={providers.length}
            key={idx}
          >
            {provider}
          </ShareProviderButton>
        ))}
      </S.ShareButtonsContainer>
    </S.Container>
  );
}
