import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import * as S from "./styled";
import { SearchIcon } from "_c/Icon";
import { Easings } from "@/config/easings";
export default function AppMenuSearchSection() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };
  return (
    <S.Container onSubmit={onSubmit}>
      <S.Input
        onChange={({ target }) => setSearchTerm(target.value)}
        value={searchTerm}
        maxLength={32}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Введите запрос"
      />
      <S.BottomLine />
      <S.BottomLineFocused
        initial={false}
        style={{
          originX: 0,
        }}
        transition={{
          ease: Easings.easeOutQuint,
          duration: 0.6,
        }}
        animate={{
          scaleX: isFocused ? 1 : 0,
        }}
      />
      <S.SearchButton aria-label="Искать" type="submit">
        <SearchIcon size={28} />
      </S.SearchButton>
    </S.Container>
  );
}
