import { useLazyImage } from "../../../hooks/useLazyImage";
import ContentLoader from "react-content-loader";
import * as S from "./styled";

const Placeholder = (props) => (
  <ContentLoader
    speed={2}
    width={512}
    height={340}
    viewBox="0 0 512 340"
    backgroundColor="#f3f3f3"
    foregroundColor="var(--primary-color)"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="512" height="340" />
  </ContentLoader>
);
type TProps = {
  src: string;
};

export default function PostThumb({ src }: TProps) {
  const { ref: imageRef, loaded: imageLoaded } = useLazyImage({
    src,
  });
  return (
    <S.ThumbContainer ref={imageRef}>
      {imageLoaded ? <S.Thumb draggable={false} src={src} /> : <Placeholder />}
    </S.ThumbContainer>
  );
}
