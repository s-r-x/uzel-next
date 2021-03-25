import { useAudioPlayer } from "./hooks";
import * as S from "./styled";
type TProps = {
  className?: string;
};
export default function HeaderSoundPlayer(props: TProps) {
  const { togglePlay, isPlaying } = useAudioPlayer();
  return (
    <S.Container
      title={isPlaying ? "Отключить" : "Включить пение птиц"}
      role="button"
      onClick={togglePlay}
      className={props.className}
    >
      <S.Pivot />
      <S.Pulse isActive={isPlaying} />
      <S.Pulse
        isActive={isPlaying}
        css={`
          animation-delay: 0.425s;
        `}
      />
    </S.Container>
  );
}
