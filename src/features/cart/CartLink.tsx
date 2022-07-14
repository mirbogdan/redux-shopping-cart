import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { getItems} from "./cartSlice";
import { useAppSelector} from "../../app/hooks";



export function CartLink() {
  const total = useAppSelector(getItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;{ total ? total: 'Cart'}</span>
    </Link>
  );
}


