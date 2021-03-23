import { CloudinaryConfig } from "@/config/cloudinary";

type TProps = {
  src: string;
};
CloudinaryConfig;
export const useImagePlaceholder = (props: TProps) => {
  return `${CloudinaryConfig.baseUrl}/image/fetch/c_scale,e_blur:500,q_25,w_512/${props.src}`;
};
