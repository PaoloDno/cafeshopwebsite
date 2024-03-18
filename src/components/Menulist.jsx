import React, {useRef} from 'react';
import "../assets/Menu.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Menu = ({ items }) => {

  const containerRef = useRef(null);
  const scrollContent = (scrollOffset) => {
    const menu_item_section = containerRef.current;
    menu_item_section.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  };

  return (
    <div className='section_center'>
    <button onClick={() => scrollContent(-500)}><BsArrowLeft className="menu-custom-icon" /></button>
      <div className='menu_item_section' ref={containerRef}>
        {items.map((menuItem) => {
          const { id, name, img, desc, price } = menuItem;
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={name} className='photo' />
              <div className='item-info'>
                <div>
                  <h4>{name}</h4>
                  <h4 className='price'>₱ {price}</h4>
                </div>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    <button onClick={() => scrollContent(500)}><BsArrowRight className="menu-custom-icon" /></button>
    </div>
  );
};

export default Menu;