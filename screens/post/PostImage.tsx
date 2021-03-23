import { useImagePlaceholder } from "@/hooks/useImagePlaceholder";
import Image from "next/image";

type TProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};
export default function PostImage(props: TProps) {
  const placeholder = useImagePlaceholder({
    src: props.src,
  });
  return (
    <Image
      width={props.width}
      height={props.height}
      src={props.src}
      objectFit="cover"
      layout="responsive"
      alt={props.alt}
    />
  );
}
