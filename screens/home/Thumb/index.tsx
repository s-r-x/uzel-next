import { useLazyImage } from "../../../hooks/useLazyImage";
import ContentLoader from "react-content-loader";
import * as S from "./styled";
import { AnimatePresence, motion } from "framer-motion";

const Placeholder = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 512 340"
      preserveAspectRatio="none"
      backgroundColor="#f3f3f3"
      foregroundColor="var(--primary-color)"
    >
      <rect x="0" y="0" rx="3" ry="3" width="512" height="340" />
    </ContentLoader>
  );
};
type TProps = {
  src: string;
};

export default function PostThumb({ src }: TProps) {
  const { ref: imageRef, loadingState } = useLazyImage({
    src,
  });
  return (
    <S.ThumbContainer ref={imageRef}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={loadingState}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          {loadingState === "loading" && <Placeholder />}
          {loadingState === "loaded" && <S.Thumb draggable={false} src={src} />}
        </motion.div>
      </AnimatePresence>
    </S.ThumbContainer>
  );
}
