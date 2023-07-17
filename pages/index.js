import CardList from "@/Compnents/CardList";
import CartList from "@/Compnents/CartList";
import { useEffect, useState } from "react";
import classes from "../styles/Home.module.css";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={classes.home}>
      <CardList cartItems={cartItems} setCartItems={setCartItems} />
      <CartList cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
