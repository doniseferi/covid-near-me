import React, { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = (props) => (
  <div className={styles.container}>{props.children}</div>
);

export default Container;
