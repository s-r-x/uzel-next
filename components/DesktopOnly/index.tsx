import MediaQuery from "react-responsive";
import { DevicesConfig } from "@/config/devices";

const DesktopOnly: React.FC = (props) => {
  return (
    <MediaQuery minDeviceWidth={DevicesConfig.desktopBreakpoint}>
      {props.children}
    </MediaQuery>
  );
};
export default DesktopOnly;
