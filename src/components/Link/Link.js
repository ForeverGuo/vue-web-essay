import { RouterLink } from "vue-router";
import styles from "./Link.module.scss";

const Link = ({ to }, { slots }) => {
  return (
    <RouterLink to={to} class={styles.link}>
      {slots.default()}
    </RouterLink>
  );
};

export default Link;
