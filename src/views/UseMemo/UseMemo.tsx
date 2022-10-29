import { useMemo, useRef, useState } from "react";

export default function UseMemo() {
  interface Product {
    name: string;
    price: number;
  }

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const nameRef = useRef<null | HTMLInputElement>(null);

  const total = useMemo(() => {
    const result = products.reduce((price, product) => {
      return price + product.price;
    }, 0);

    return result;
  }, [products]);

  function handleAddProduct() {
    setProducts((prev) => [
      ...prev,
      {
        name,
        price: +price,
      },
    ]);

    setName("");
    setPrice("");
    nameRef.current?.focus();
  }

  return (
    <>
      <div>UseMemo</div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter the name ..."
        onChange={(e) => setName(e.target.value)}
      />

      <br></br>

      <input
        value={price}
        placeholder="Enter the price ..."
        onChange={(e) => setPrice(e.target.value)}
      />

      <br></br>

      <button onClick={() => handleAddProduct()}>Add</button>

      <p>Total: {total} VND</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - price: {product.price} VND
          </li>
        ))}
      </ul>
    </>
  );
}
