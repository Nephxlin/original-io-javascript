import React from 'react'

import {ProductHeader} from './styles'

import Button from '../../components/Button'

const ProductDescription = props => {
  const {openClosedModal} = props
  
  
  return (
    <ProductHeader>
      <h1>Rasteira tira dedo</h1>
      <span>RT 0568 | 03.07.0653</span>
      <div id="price">
        <p>R$69,00 |</p><strong>R$ 55,20</strong>
        <p>Ou 6x de R$ 9,20</p>
  
      </div>
      <Button 
        clickFunction={() => openClosedModal('modal-add-card')}
        Title={`Adicionar à sacola`}
        />
    </ProductHeader>
  )
}

export default ProductDescription