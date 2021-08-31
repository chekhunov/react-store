import React from "react";
import { Menu } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css'

const TopMenu = () => (

  <Menu>
  <Menu.Item
    name='browse'
  //   active={activeItem === 'browse'}
  //   onClick={this.handleItemClick}
  >
    Магазин книг
  </Menu.Item>


  <Menu.Menu position='right'>
    <Menu.Item
      name='signup'
      // active={activeItem === 'signup'}
      // onClick={this.handleItemClick}
    >
     Итого: <b>0</b>грн
    </Menu.Item>

    <Menu.Item
      name='help'
      // active={activeItem === 'help'}
      // onClick={this.handleItemClick}
    >
      Корзина (0)
    </Menu.Item>
  </Menu.Menu>
  </Menu>

)  

export default TopMenu;

