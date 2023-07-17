import classes from "../styles/CardList.module.css";
import ACard from "./ACard";

const CardList = ({ cartItems, setCartItems }) => {
  const itemsList = [
    {
      name: "Samsung S20",
      price: 420,
      id: 1,
      image:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg",
    },
    {
      name: "Iphone 14",
      price: 650,
      id: 2,
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
    },
    {
      name: "Iphone 12 pro max",
      price: 525,
      id: 3,
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
    },
    {
      name: "Iphone X S Max",
      price: 450,
      id: 4,
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg",
    },
  ];
  return (
    <div className={classes.cardList}>
      <h1>All Items</h1>
      <div className={classes.cards__wrapper}>
        {itemsList.map((item) => {
          return (
            <ACard
              key={item.id}
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
