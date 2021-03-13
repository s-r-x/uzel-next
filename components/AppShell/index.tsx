import Header from "./Header";

const AppShell: React.FC = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
export default AppShell;
