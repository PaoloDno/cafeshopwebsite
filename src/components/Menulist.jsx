import React from 'react';
import "../assets/Menu.css";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <div>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
              </div>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;