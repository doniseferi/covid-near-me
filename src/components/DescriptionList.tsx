import React from "react";
import { uuidv4 } from "../utils";

export interface DecriptionItem {
  term: string;
  description: string;
}

const shouldRender = (
  value: DecriptionItem | null | undefined
): value is DecriptionItem =>
  value !== null &&
  value !== undefined &&
  value.term !== null &&
  value.term !== undefined &&
  value.term !== "" &&
  value.description !== null &&
  value.description !== undefined &&
  value.description !== "";

const descriptionItems = (items: DecriptionItem[]) =>
  items.filter(shouldRender).map((kvp) => (
    <React.Fragment key={uuidv4()}>
      <dt>{kvp.term}</dt>
      <dd>{kvp.description}</dd>
    </React.Fragment>
  ));

export default (items: DecriptionItem[]) => <dl>{descriptionItems(items)}</dl>;
