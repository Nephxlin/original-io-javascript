import React from 'react'

import Button from '../../components/Button'

import {ProductInfoComponent} from './styles'

const ProductInfo = props => {

  const {openClosedModal} = props

  return (
    <ProductInfoComponent>
        <Button 
        clickFunction={() => openClosedModal('modal-add-card')}
        Title={`Adicionar à sacola`}
        />

        <h3>Descrição</h3>
        <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
    </ProductInfoComponent>
  )
}

export default ProductInfo