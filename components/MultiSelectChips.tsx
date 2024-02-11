import {MouseEvent} from "react";
import {ProductType} from "../lib/types";
import MultiSelectChip from "./MultiSelectChip";

type MultiSelectChipsProps = {
  selectedProducts: ProductType[];
  remove: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
  lastHightlight: boolean;
};

const MultiSelectChips = ({selectedProducts, remove, lastHightlight}: MultiSelectChipsProps) => {
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
