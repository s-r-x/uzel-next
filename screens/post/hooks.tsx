// @ts-nocheck
import parse from "html-react-parser";
import { useMemo } from "react";
import PostImage from "./PostImage";
export const useConvertContentToJsx = (content: string) => {
  return useMemo(() => {
    return parse(content, {
      replace: (node) => {
        if (node.name === "img") {
          const attrs = node.attribs;
          return (
            <PostImage
              width={attrs.width}
              height={attrs.height}
              src={attrs.src}
              alt={attrs.alt}
            />
          );
        }
        return node;
      },
    });
  }, [content]);
};
