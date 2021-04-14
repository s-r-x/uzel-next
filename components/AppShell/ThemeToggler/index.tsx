import { useThemeStore } from "@/stores/theme";
import { motion } from "framer-motion";
import { memo } from "react";
import shallow from "zustand/shallow";
import * as S from "./styled";

type TProps = {
  className?: string;
};
const ThemeToggler = (props: TProps) => {
  const [theme, toggleTheme] = useThemeStore(
    (state) => [state.theme, state.toggleTheme],
    shallow
  );
  const isDark = theme === "dark";
  return (
    <S.Container
      role="presentation"
      initial={false}
      animate={{
        backgroundColor: isDark ? "#252E48" : "#86AFFF",
      }}
      className={props.className}
      onClick={toggleTheme}
    >
      <S.Toggler
        initial={false}
        animate={{
          x: isDark ? 25 : 5,
        }}
      >
        <motion.svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
          }}
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
          }}
          height="20"
          viewBox="0 0 64 64"
        >
          <motion.path
            fill="white"
            d="M24.685 3.708c2.541 2.397 4.739 5.301 6.33 8.748 6.35 13.996.232 30.493-13.715 36.899-3.391 1.54-6.95 2.338-10.475 2.508-1.944.048-2.706 2.419-1.312 3.756 9.183 8.384 22.834 10.985 35 5.476 16.096-7.334 23.142-26.35 15.753-42.398C50.75 6.637 38.656-.336 26.15.012c-1.889 0-2.86 2.358-1.466 3.696z"
          ></motion.path>
        </motion.svg>
        <S.Day
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
          }}
        />
      </S.Toggler>
    </S.Container>
  );
};

export default memo(ThemeToggler);
