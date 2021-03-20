type TProps = {
  className?: string;
};
const Spin = (props: TProps) => {
  return (
    <div className={props.className}>
      <div className="sk-bounce">
        <div className="sk-bounce-dot"></div>
        <div className="sk-bounce-dot"></div>
      </div>
    </div>
  );
};

export default Spin;
