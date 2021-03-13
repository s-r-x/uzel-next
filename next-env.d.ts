import { CSSProp } from "styled-components";

/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
export type TStringDict = {
  [key: string]: string;
};
export type TAnyDict = {
  [key: string]: any;
};
