// @ts-nocheck
import parse from "html-react-parser";
import Image from "next/image";
import { useMemo } from "react";
export const useConvertContentToJsx = (content: string) => {
  return useMemo(() => {
    return parse(content, {
      replace: (node) => {
        if (node.name === "img") {
          const attrs = node.attribs;
          return (
            <Image
              width={attrs.width}
              height={attrs.height}
              src={attrs.src}
              objectFit="cover"
              layout="responsive"
              alt={attrs.alt}
            />
          );
        }
        return node;
      },
    });
  }, [content]);
};
