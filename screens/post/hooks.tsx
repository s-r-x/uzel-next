// @ts-nocheck
import parse from "html-react-parser";
import { useMemo } from "react";
import Image from "_c/Image";
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
              altText={attrs.alt}
            />
          );
        }
        return node;
      },
    });
  }, [content]);
};
