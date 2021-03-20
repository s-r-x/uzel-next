import dynamic from "next/dynamic";

const ObservationsLoadable = dynamic(() => import("."));
export default ObservationsLoadable;
