import React from "react";
import styles from "./Cart.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { removeFromCart, getTotalSum, updateQuantity } from "./cartSlice";

export function Cart() {
const products = useAppSelector((state) => state.products.products);
const items = useAppSelector((state) => state.cart.items);
const dispatch = useAppDispatch();
const total = useAppSelector(getTotalSum);

// function to listen the change of quantity on input field and trigger the quantity change in store
function onQuantityChange(e:React.FocusEvent<HTMLInputElement>, id:string){
  const quantity = Number(e.target.value);
  dispatch(updateQuantity({id, quantity}))
}

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price per unit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity])=> (
            <tr>
              <td>{products[id].name}</td>
              <td>
                <input type="text" className={styles.input} defaultValue={quantity}  onBlur={(e) => onQuantityChange(e, id)}/>
              </td>
              <td>${products[id].price}</td>
              <td>
                <button aria-label={`Remove ${products[id].name} from Shopping Cart`} onClick={() => dispatch(removeFromCart(id))}>
                  X
                </button>
              </td>
            </tr>
          ))}
         
          {/* <tr>
            <td>Star Wars</td>
            <td>
              <input type="text" className={styles.input} defaultValue={17} />
            </td>
            <td>$25.99</td>
            <td>
              <button aria-label="Remove Star Wars from Shopping Cart">
                X
              </button>
            </td>
          </tr> */}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${total.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}
