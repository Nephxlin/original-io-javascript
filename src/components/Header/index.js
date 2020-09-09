import React from 'react';

import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import menuMobile from '../../assets/icons/menu-mobile.svg'

import { HeaderContainer, NavBar } from './styles'

function Header(props) {
  const {quantityProduct, openModalCart} = props
  
  return (
    <HeaderContainer className="Header">
      <div id="logo">
        <img src={logo} alt="logotype" />
      </div>

      <NavBar className="top-bar">

        <div className='left-item-top-bar'>
          <img src={menuMobile} alt="Menu" />
          <a>Entrar | Cadastrar-se</a>
        </div>

        <div className="mid-item-top-bar">
          <div id="mid-content">
            <div>
              <a>SAPATOS</a>
            </div>
            <div>
              <a>BOLSAS</a>
            </div>

            <div>
              <a>ACESSÓRIOS</a>
            </div>

            <div>
              <a>OFF</a>
            </div>

          </div>
        </div>

        <div className="search-top-bar">
          <img src={search} alt="search" />
          <input type="text" placeholder='Buscar' />
        </div>
        <div className="shopping-bag-top-bar">
          <img onClick={() => openModalCart('modal-cart-content')} src={shoppingBag} alt="shopping bag" />
          <span>{quantityProduct}</span>
        </div>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
