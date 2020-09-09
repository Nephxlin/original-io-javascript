import React, { useState } from 'react';

import Header from '../../components/Header'
import LeftNavBar from '../../components/LeftNavBar'
import ProductPhoto from '../../components/ProductPhoto'
import ProductDescription from '../../components/ProductDescription'
import ProductInfo from '../../components/ProductInfo'
import PhotoViewer from '../../components/PhotoViewer'
import ColorSelect from '../../components/ColorSelect'
import SizeBox from '../../components/SizeBox'
import Footer from '../../components/Footer'
import ModalAdd from '../../components/ModalAdd';
import ModalCart from '../../components/ModalCart';

import { Main, ShowRoom, ProductForm } from './styles'

import sandalsImg from '../../assets/images/product-sandal.jpg'
import bagImg from '../../assets/images/product-bag.jpg'
import leatherBagImg from '../../assets/images/product-leather-bag.jpg'
import chromeSandalsImg from '../../assets/images/product-chrome-sandals.png'

import elipseFuscia from '../../assets/icons/elipse-color-fuscia.svg'
import elipseOcean from '../../assets/icons/elipse-color-ocean.svg'
import elipseBrown from '../../assets/icons/elipse-color-brown.svg'
import elipseBlack from '../../assets/icons/elipse-color-black.svg'




function Index() {

  const [quantityProduct, SetQuantityProduct] = useState('0')

  const [colorName, setColorName] = useState('Fuscia')

  const [colorOptions, setColorOptions] = useState([
    {
      cor: elipseFuscia,
      name: 'Fuscia',
      selected: 'Enable'
    },
    {
      cor: elipseOcean,
      name: 'Oceano',
      selected: 'Disable'
    },
    {
      cor: elipseBrown,
      name: 'Marrom',
      selected: 'Disable'
    },
    {
      cor: elipseBlack,
      name: 'Preto',
      selected: 'Disable'
    },
  ])

  const [cardItems, setCardItems] = useState([
    {
      title: 'Rasteira Tira Dedo',
      img: sandalsImg,
      price: 'R$ 49,50',
      quantity: 1
    },
    {
      title: 'Bolsa',
      img: bagImg,
      price: 'R$ 120,50',
      quantity: 9
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 3
    },
    {
      title: 'Sandalia Cromada',
      img: chromeSandalsImg,
      price: 'R$ 29,50',
      quantity: 2
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 6
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 3
    },
    {
      title: 'Sandalia Cromada',
      img: chromeSandalsImg,
      price: 'R$ 29,50',
      quantity: 2
    },
    {
      title: 'Bolsa de Couro',
      img: leatherBagImg,
      price: 'R$ 25,50',
      quantity: 6
    },
  ])

  function handleSelectColor(props, index) {
    for (let item in colorOptions) {
      colorOptions[item].selected = 'Disable'
    }
    if (colorOptions[index].name === props) {
      return colorOptions[index].selected = 'Enable'
    }
  }

  function handleSetColor(props, index) {
    setColorName(props)
    handleSelectColor(props, index)
  }

  //Get Size
  const [sizeTitle, setSizeTitle] = useState('37')
  const [sizeOptions, setSizeOptions] = useState([
    {
      size: '33',
      selected: 'Disable'
    },
    {
      size: '34',
      selected: 'Disable'
    },
    {
      size: '35',
      selected: 'Disable'
    },
    {
      size: '36',
      selected: 'Disable'
    },
    {
      size: '37',
      selected: 'Enable'
    },
    {
      size: '38',
      selected: 'Disable'
    },
    {
      size: '39',
      selected: 'Disable'
    },
    {
      size: '40',
      selected: 'Disable'
    },
    {
      size: '41',
      selected: 'Disable'
    },
    {
      size: '42',
      selected: 'Disable'
    }
  ])

  function handleSelectSize(props, index) {

    for (let item in sizeOptions) {
      sizeOptions[item].selected = 'Disable'
    }
    if (sizeOptions[index].size === props) {
      return sizeOptions[index].selected = 'Enable'
    }
  }

  function handleSetSize(props, index) {
    setSizeTitle(props)
    handleSelectSize(props, index)
  }

  //Open / Close Modal 
  const [modal, setModal] = useState('modal-add-card-disable')
  
  function handleModal(props) {
    setModal(props)
  }

  //Open / Close Cart item
  const [modalCart, setModalCart] = useState('modal-cart-content-disable')
  
  function handleModalCart(props) {
    setModalCart(props)
    setModal('modal-add-card-disable')
  }


  return (


    <>
      <Header 
        quantityProduct={quantityProduct} 
        openModalCart={handleModalCart}
      />
      <Main>
        <legend> <p>Home /<strong> Sapatos</strong></p> </legend>
        <ShowRoom>

          <LeftNavBar
            SelectedProduct={sandalsImg}
          />

          <ProductPhoto
            SelectedProduct={sandalsImg}
          />

          <ProductForm>
            <ProductDescription
              openClosedModal={handleModal}
            />

            <ColorSelect
              colorName={colorName}
              colorOptions={colorOptions}
              //Change Color State
              handleSetColor={handleSetColor}
            />

            <SizeBox
              sizeTitle={sizeTitle}
              sizeOptions={sizeOptions}
              //Change Size State
              handleSetSize={handleSetSize}
            />

            <ProductInfo
              openClosedModal={handleModal}
            />

          </ProductForm>

        </ShowRoom>

      </Main>

      <PhotoViewer
        colors={[elipseFuscia, elipseOcean, elipseBrown, elipseBlack]}
        images={[bagImg,chromeSandalsImg,sandalsImg,leatherBagImg]}
      />

      <Footer/>

      <ModalAdd
        modalStatus={modal}
        selectedProduct={sandalsImg}
        openClosedModal={handleModal}
        openModalCart={handleModalCart}
      />

      <ModalCart
        modalStatus={modalCart}
        openModalCart={handleModalCart}
        cardItems={cardItems}
      />
    </>
  );
}

export default Index;
