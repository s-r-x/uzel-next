import dynamic from "next/dynamic";

const CursorLoadable = dynamic(() => import("_c/Cursor"), { ssr: false });

export default CursorLoadable;
