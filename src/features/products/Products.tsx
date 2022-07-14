import React, { useEffect, useState } from "react";
import { getProducts, Product } from "../../app/api";
import styles from "./Products.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { receiveProducts } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";

export function Products() {
  // const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getProducts().then((products) => {
      // setProducts(products);
      dispatch(receiveProducts(products))
    });
  }, []);

const products = useAppSelector(state => state.products.products)

  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
              </figure>
              <div>
                <h1>{product.name}</h1>
                <h3>{product.album}</h3>
                <p>{product.format}</p>
                <p>{product.description}</p>
                <p>	&euro; {product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
