import { useMemo } from "react";
import { ShareConfig } from "./config";
import {
  FacebookShareButton,
  OKShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  MailruShareButton,
} from "react-share";
import {
  FacebookIcon,
  OKIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  MailruIcon,
} from "react-share";
import { TShareProps } from "./typings";
import { LinkBuilder } from "@/services/link-builder";
export const useShareProviders = ({ slug, title, picture }: TShareProps) => {
  return useMemo(() => {
    const link = LinkBuilder.build("post", {
      slug,
      isAbsolute: true,
    });
    const commonShareProps = {
      title,
      url: link,
    };
    return [
      <FacebookShareButton {...commonShareProps}>
        <FacebookIcon size={ShareConfig.btnSize} round />
      </FacebookShareButton>,
      <OKShareButton image={picture} {...commonShareProps}>
        <OKIcon size={ShareConfig.btnSize} round />
      </OKShareButton>,
      <VKShareButton image={picture} {...commonShareProps}>
        <VKIcon size={ShareConfig.btnSize} round />
      </VKShareButton>,
      <WhatsappShareButton {...commonShareProps}>
        <WhatsappIcon size={ShareConfig.btnSize} round />
      </WhatsappShareButton>,
      <PinterestShareButton media={picture} {...commonShareProps}>
        <PinterestIcon size={ShareConfig.btnSize} round />
      </PinterestShareButton>,
      <TelegramShareButton {...commonShareProps}>
        <TelegramIcon size={ShareConfig.btnSize} round />
      </TelegramShareButton>,
      <ViberShareButton {...commonShareProps}>
        <ViberIcon size={ShareConfig.btnSize} round />
      </ViberShareButton>,
      <TwitterShareButton {...commonShareProps}>
        <TwitterIcon size={ShareConfig.btnSize} round />
      </TwitterShareButton>,
      <MailruShareButton imageUrl={picture} {...commonShareProps}>
        <MailruIcon size={ShareConfig.btnSize} round />
      </MailruShareButton>,
    ];
  }, [slug, title, picture]);
};

const degToRad = (degrees: number) => degrees * (Math.PI / 180);
const polarToCartesian = (angle: number, r: number) => {
  const rad = degToRad(angle);
  return {
    x: Math.cos(rad) * r,
    y: Math.sin(rad) * r,
  };
};
export const usePolarToCartesian = (angle: number, r: number) => {
  return polarToCartesian(angle, r);
};
