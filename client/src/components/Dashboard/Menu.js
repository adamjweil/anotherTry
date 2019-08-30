import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
      <div>
        <div className='ui pointing menu'>
          <Link to="#" className='active item'>
            Messages
          </Link>
          <Link to="#" className='item'>
            Friends
          </Link>
          <Link to="#" className='item'>
            Tickets
          </Link>
          <div className='right menu'>
            <div className='item'>
              <div className='ui icon input'>
                <input type='text' placeholder='Search...' />
                <i aria-hidden='true' className='search icon'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Menu;
