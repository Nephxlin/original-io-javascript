import React from 'react'

import ArrowBox from '../ArrowBox'

import { PhotoScroller, Photoloader, PhotoloaderMobile } from './styles'

const PhotoViewer = props => {
  const { colors, images } = props

  const Items = [
    {
      image: images[0],
      colorOptions: [...colors]
    },
    {
      image: images[1],
      colorOptions: [...colors]
    },
    {
      image: images[2],
      colorOptions: []
    },
    {
      image: images[3],
      colorOptions: [colors[1], colors[2], colors[3]]
    },
  ]

  return (
    <PhotoScroller className="photo-viewer">
      <div>
        <h1>Quem viu, viu também</h1>

        <Photoloader className="photo-loader">
          {Items.map((content, index) => {
            return (
              <div>
                <img key={index} src={content.image} alt="sandals" />
                <div id="product-info">
                  <p>R$ 204,90</p>
                  <div id='color-options'>
                    {content.colorOptions.map((color, index) => {
                      return (
                        <img src={color} alt={color} />
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </Photoloader>


        <PhotoloaderMobile className="photo-viewer-mobile">
          <div className="photo-loader-mobile">
            <img src={images[0]} alt="sandals" />
            <img src={images[1]} alt="bag" />
            <div id="product-info-mobile">
              <p>R$ 204,90</p>
              <span>Ou 6x de R$ 34,15</span>
            </div>
            <div id="product-info-mobile">
              <p>R$ 204,90</p>
              <span>Ou 6x de R$ 34,15</span>
            </div>
          </div>

        </PhotoloaderMobile>

        <ArrowBox />

      </div>
    </PhotoScroller>

  )
}

export default PhotoViewer