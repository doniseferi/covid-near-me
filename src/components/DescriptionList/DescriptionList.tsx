import React from "react";
import { uuidv4 } from "../../utils";
import styles from "./DescriptionList.module.css";

export interface DescriptionItem {
  term: string;
  description: string;
}

const shouldRender = (
  value: DescriptionItem | null | undefined
): value is DescriptionItem =>
  value !== null &&
  value !== undefined &&
  value.term !== null &&
  value.term !== undefined &&
  value.term !== "" &&
  value.description !== null &&
  value.description !== undefined &&
  value.description !== "";

const DescriptionItems = (items: DescriptionItem[]) =>
  items.filter(shouldRender).map((kvp) => (
    <React.Fragment key={uuidv4()}>
      <dt className={styles.term}>{kvp.term}</dt>
      <dd className={styles.details}>{kvp.description}</dd>
    </React.Fragment>
  ));

const DescriptionList = (items: DescriptionItem[]) => (
  <dl className={styles.list}>{DescriptionItems(items)}</dl>
);

export default DescriptionList;
