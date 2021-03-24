import * as S from "./styled";
import Image from "_c/Image";
import { motion } from "framer-motion";

type TProps = {
  src: string;
  width: number;
  height: number;
  altText?: string;
  postId: number;
};

export default function PostThumb({
  src,
  width,
  height,
  altText,
  postId,
}: TProps) {
  return (
    <motion.div layoutId={`post-thumb-${postId}`}>
      <S.ThumbContainer>
        <Image altText={altText} width={width} height={height} src={src} />
      </S.ThumbContainer>
    </motion.div>
  );
}
