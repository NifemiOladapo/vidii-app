import Image from "next/image";
import classes from "../styles/ACart.module.css";
import { useEffect, useState } from "react";

const ACart = ({ item, cartItems, setCartItems }) => {
  const [itemOriginalPrice, setItemOriginalPrice] = useState(0);

  useEffect(() => {
    setItemOriginalPrice(item.price);
  }, []);

  const removeItemFunc = () => {
    const reminantItems = cartItems.filter((cart) => {
      return cart.id !== item.id;
    });
    setCartItems(reminantItems);
  };

  const increaseQuantityFunc = () => {
    const aCart = cartItems.find((cart) => cart.id === item.id);
    aCart.quantity++;
    aCart.price = aCart.price + itemOriginalPrice;
    setCartItems([...cartItems]);
  };

  const decreaseQuantityFunc = () => {
    if (item.quantity < 2) {
      return;
    }
    const aCart = cartItems.find((cart) => cart.id === item.id);
    aCart.quantity--;
    aCart.price = aCart.price - itemOriginalPrice;

    setCartItems([...cartItems]);
  };

  return (
    <div className={classes.ACart}>
      <div className={classes.left__part}>
        <Image src={item.image} width={80} height={80} />
        <h3 className={classes.inf1}>{item.name}</h3>
        <h3 className={classes.inf2}>$ {item.price}</h3>
        <h3 className={classes.inf3}>Quantity ({item.quantity})</h3>
      </div>
      <div className={classes.right__part}>
        <button onClick={increaseQuantityFunc}>+</button>
        <button onClick={decreaseQuantityFunc}>-</button>
        <button onClick={removeItemFunc} className={classes.button__delete}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default ACart;
