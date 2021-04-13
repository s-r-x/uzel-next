import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import * as S from "./styled";
import { SearchIcon } from "_c/Icon";
import { Easings } from "@/config/easings";
import { LinkBuilder } from "@/services/link-builder";
import { innerSectionContainerVariants } from "../motion";
import { Variants } from "framer-motion";

const containerVariants: Variants = {
  ...innerSectionContainerVariants,
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
export default function AppMenuSearchSection() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push(
      LinkBuilder.build("search", {
        term: searchTerm,
      })
    );
  };
  return (
    <S.Container
      animate="animate"
      exit="exit"
      initial="initial"
      variants={containerVariants}
      onSubmit={onSubmit}
    >
      <S.Input
        onChange={({ target }) => setSearchTerm(target.value)}
        value={searchTerm}
        maxLength={32}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Введите запрос"
        aria-label="Введите запрос"
      />
      <S.BottomLineFocused
        initial={false}
        style={{
          originX: 0,
          originY: 1,
        }}
        transition={{
          ease: Easings.one,
          duration: 1,
        }}
        animate={{
          scaleY: isFocused ? 1 : 0,
        }}
      />
      <S.SearchButton aria-label="Искать" type="submit">
        <SearchIcon size={28} />
      </S.SearchButton>
    </S.Container>
  );
}
