import styles from "./index.module.css";
const Button: React.FC = (props) => {
  return <button className={styles.container}>{props.children}</button>;
};
export default Button;
