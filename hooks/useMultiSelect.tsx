import {ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useMemo, useState} from "react";
import {ProductType} from "../lib/types";

const useMultiSelect = (productsList: ProductType[], selectedItems: ProductType[]) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProductsList, setFilteredProductList] = useState<ProductType[]>([]);

  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>(selectedItems);

  const [showList, setShowList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lastHightlight, setLasHightlight] = useState(false);

  const upHandler = () => {
    setSelectedIndex((i) => (i - 1 >= 0 ? i - 1 : filteredProductsList.length - 1));
  };

  const downHandler = () => {
    setSelectedIndex((i) => (i < filteredProductsList.length - 1 ? i + 1 : 0));
  };

  const enterHandler = (ctrlKey: boolean) => {
    if (filteredProductsList.length <= 0) return;
    if (searchValue.length === 0 && !showList) {
      setShowList(true);
      return;
    }
    setSelectedProducts((state) => [...state, filteredProductsList[selectedIndex]]);
    setSearchValue("");
    setShowList(ctrlKey);
  };

  const backspaceHandler = () => {
    if (searchValue.length === 0 && selectedProducts.length > 0) {
      if (!lastHightlight) setLasHightlight(true);
      else {
        setSelectedProducts((products) => products.slice(0, -1));
        setLasHightlight(false);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        upHandler();
        return true;

      case "ArrowDown":
        e.preventDefault();
        downHandler();
        return true;

      case "Enter":
        console.log(e);
        e.preventDefault();
        enterHandler(e.ctrlKey);
        return true;

      case "Backspace":
        backspaceHandler();
        return true;

      default:
        return true;
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSelectedIndex(0);
    setShowList(true);
  };

  const remove = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    setSelectedProducts((list) => list.filter((l) => l.id !== id));
  };

  const add = (product: ProductType) => {
    setSelectedProducts((state) => [...state, product]);
    setSearchValue("");
    // setShowList(false);
  };

  useEffect(() => {
    if (selectedProducts.length == 0) {
      setFilteredProductList(productsList);
      return;
    }
    const arr = productsList.filter(
      (item1) => !selectedProducts.some((item2) => item1.id == item2.id)
    );
    setFilteredProductList(arr);
  }, [selectedProducts]);

  const validfilteredList = useMemo(
    () => productsList.filter((item1) => !selectedProducts.some((item2) => item1.id == item2.id)),
    [selectedProducts]
  );

  useEffect(() => {
    if (searchValue.length == 0) {
      setFilteredProductList(validfilteredList);
      return;
    }
    const filteredList = validfilteredList.filter((option) =>
      option.title.toLocaleLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProductList(filteredList);
  }, [searchValue]);

  return {
    showList,
    setShowList,
    selectedProducts,
    remove,
    add,
    lastHightlight,
    searchValue,
    handleKeyDown,
    handleOnChange,
    filteredProductsList,
    selectedIndex,
  };
};

export default useMultiSelect;
