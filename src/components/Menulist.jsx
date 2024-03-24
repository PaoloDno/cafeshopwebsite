import React from 'react';
import "../assets/Menulist.css";
const Menu = ({ items }) => {

  return (
    <div className='menulist-section flex-center'>
      <div className='menu-item-list'>
        {items.map((menuItem) => {
          const { id, name, img, desc, price } = menuItem;
          return (
            <article key={id} className='menu-item-card'>
              <img src={img} alt={name} className='display-photo' />
              <div className='item-info'>
                <div className='item-info-header'>
                  <h4 className='item-name'>{name}</h4>
                  <h4 className='item-price'>₱ {price}</h4>
                </div>
                <p className='item-text-description'>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;