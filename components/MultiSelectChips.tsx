import {MouseEvent} from "react";
import {ProductType} from "../lib/types";
import MultiSelectChip from "./MultiSelectChip";

const MultiSelectChips = ({
  selectedProducts,
  remove,
  lastHightlight,
}: {
  selectedProducts: ProductType[];
  remove: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
  lastHightlight: boolean;
}) => {
  return selectedProducts.map((prod, index) => (
    <MultiSelectChip
      id={prod.id}
      title={prod.title}
      remove={remove}
      key={prod.id}
      shouldHighlight={lastHightlight && index === selectedProducts.length - 1}
    />
  ));
};

export default MultiSelectChips;
