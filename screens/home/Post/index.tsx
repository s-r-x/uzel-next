import { usePostExcerpt } from "../../hooks/usePostExcerpt";
import styles from "./index.module.css";
import { useFormattedDate } from "../../../hooks/useFormattedDate";
import Button from "../../../components/Button";

type TProps = {
  data: any;
};
export default function Post({ data }: TProps) {
  const excerpt = usePostExcerpt(data.excerpt);
  const date = useFormattedDate(data.date);
  return (
    <div className={styles.container}>
      <img
        className={styles.thumb}
        src={data.featuredImage.node.mediaItemUrl}
      />
      <div>{date}</div>
      <h2 className={styles.header}>{data.title}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
      <Button>Читать</Button>
    </div>
  );
}
