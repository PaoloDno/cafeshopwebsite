import React, { useState } from 'react';
import Menu from './Menulist.jsx';
import Categories from './Categor.jsx';
import items from "../../public/data/menulist.js";
import Header  from './Header.jsx';
import "../assets/Orderpage.css";
const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function Orderpage() {
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
    <div className='order-page flex-center'>
      <Header />
      <section className="menu-section">
        <div className="menu-title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
        </div>
        <div className='menu-body'>
          <div className='sticky-bar'>
          <Categories categories={categories} filterItems={filterItems} />
          </div>
          <div>
          <Menu items={menuItems} />
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Orderpage;