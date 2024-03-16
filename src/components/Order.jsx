import React, { useState } from 'react';
import Menu from './Menulist.jsx';
import Categories from './Categor.jsx';
import "../assets/Menu.css"
import items from "../../public/data/menulist.js";
import Header  from './Header.jsx';


const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function Orderp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className='order-page flex-center-width-100'>
      <Header />
      <section className="menu-section flex-center-width">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className='sticky-bar flex-center-width'>
        <Categories categories={categories} filterItems={filterItems} />
        </div>
        <Menu items={menuItems} />
      </section>
    </div>
  );
}

export default Orderp;