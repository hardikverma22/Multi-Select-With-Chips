"use client";
import {useState} from "react";
import MultiSelect from "../components/MultiSelect";
import products from "@/data/product.json";
import {ProductType} from "../lib/types";

export default function Home() {
  const [productsList, setProductList] = useState<ProductType[]>(products.products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-100">
      <MultiSelect productsList={productsList} selectedItems={[productsList[0], productsList[1]]} />
    </main>
  );
}
