import Image from "next/image";
import classes from "../styles/ACard.module.css";

const ACard = ({ item, cartItems, setCartItems }) => {
  const addToCartFunc = () => {
    const findItemInCart = cartItems.find((cart) => cart.id === item.id);
    if (findItemInCart) {
      return;
    }
    cartItems.push({
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1,
      image: item.image,
    });
    setCartItems([...cartItems]);
  };
  return (
    <div className={classes.ACard}>
      <Image src={item.image} width={180} height={200} />
      <h2>{item.name}</h2>
      <h3>$ {item.price}</h3>
      <button onClick={addToCartFunc}>Add To Cart</button>
    </div>
  );
};

export default ACard;
