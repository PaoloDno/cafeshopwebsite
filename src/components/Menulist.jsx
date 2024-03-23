import React, {useRef} from 'react';
import "../assets/Menu.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "../assets/Menulist.css";
const Menu = ({ items }) => {

  return (
    <div className='menu-list-section flex-center'>
      <div className='menu-item-list'>
        {items.map((menuItem) => {
          const { id, name, img, desc, price } = menuItem;
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={name} className='display-photo' />
              <div className='item-info'>
                <div>
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