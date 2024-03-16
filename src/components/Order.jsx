import React, { useState } from 'react';
import Menu from './Menulist.jsx';
import Categories from './Categor.jsx';
import "../assets/Menu.css"
import items from "../../public/data/menulist.js";
import Header  from './Header.jsx';


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Orderp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className='order-page'>
      <Header />
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </div>
  );
}

export default Orderp;