import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Products } from "./features/products/Products";
import { CartLink } from "./features/cart/CartLink";
import { Cart } from "./features/cart/Cart";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <main className="page">
      <h1>Welcome to Carturesti</h1>
      <figure>
        <img src="/carturesti.jpg" alt="A large old storefront" width="800" />
        <figcaption>Carturesti Online&reg;</figcaption>
      </figure>
    </main>
  );
}
