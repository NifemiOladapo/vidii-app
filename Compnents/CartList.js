import classes from "../styles/CartList.module.css";
import ACart from "./ACart";

const CartList = ({ cartItems, setCartItems }) => {
  const totalItemAmount = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <div className={classes.cartList}>
      <h3>Cart Items ({cartItems.length})</h3>

      <div className={classes.cart__wrapper}>
        {cartItems.map((item) => {
          return (
            <ACart
              key={item.id}
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>

      <h1>Total Items : $ {totalItemAmount}</h1>
    </div>
  );
};

export default CartList;
