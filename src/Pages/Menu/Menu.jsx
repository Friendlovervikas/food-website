import React from "react";
import "./Menu.css";
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomato sauce, mozzarella, and basil.",
      price: "$9.99",
      image: "https://cdn.pixabay.com/photo/2017/06/27/08/41/pizza-2446700_1280.jpg", // Online image URL
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Loaded with pepperoni slices and melted cheese.",
      price: "$12.99",
      image: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg", // Online image URL
    },
    {
      id: 2,
      name: "Breads",
      description: "Loaded with pepperoni slices and melted cheese.",
      price: "$12.99",
      image: "https://cdn.pixabay.com/photo/2020/11/01/02/29/bread-5702703_960_720.jpg", // Online image URL
    },
    {
      id: 3,
      name: "Veggie Delight Pizza",
      description: "Topped with fresh veggies and a sprinkle of herbs.",
      price: "$11.99",
      image: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg", // Online image URL
    },

    {
      id: 1,
      name: "Desert",
      description: "Classic Desert with fresh tomato sauce, mozzarella, and basil.",
      price: "$9.99",
      image: "https://cdn.pixabay.com/photo/2024/04/13/11/29/muffins-8693748_1280.jpg", // Online image URL
    },
    {
      id: 1,
      name: "Maggi",
      description: "Classic Maggi with fresh tomato sauce, mozzarella, and basil.",
      price: "$9.99",
      image: "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg", // Online image URL
    },
    {
      id: 1,
      name: "Pasta",
      description: "Classic Pasta with fresh tomato sauce, mozzarella, and basil.",
      price: "$9.99",
      image: "https://cdn.pixabay.com/photo/2020/06/02/18/10/noodles-5252012_960_720.jpg", // Online image URL
    },
    {
      id: 1,
      name: "Sandwitch",
      description: "Classic Sandwitch with fresh tomato sauce, mozzarella, and basil.",
      price: "$9.99",
      image: "https://cdn.pixabay.com/photo/2021/11/18/10/15/sandwich-6806036_1280.jpg", // Online image URL
    },
  ];

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <footer className="about-us-footer hello">
        <p>Contact us: support@foodly.com | Follow us on social media: @Foodly</p>
      </footer>
    </div>
    
  );
};

export default Menu;
