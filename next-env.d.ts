import { CSSProp } from "styled-components";

/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
