import styled from 'styled-components'

export const PhotoScroller = styled.div`
  margin-top: 30px;
  h1{
    color: var(--color-primary);
    display: flex;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    padding-bottom:  17px;
  }

  @media (min-width: 780px){
    display: flex;
    justify-content:center;
    margin:0 auto;
    margin-top:104px;
  
    h1{
    color: var(--color-primary);
    display: flex;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    padding-bottom:  17px;
    }
  }

`

export const Photoloader = styled.div`
  display:none;



  @media(min-width: 780px){
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:13px;
    align-content:center;

    img{
      width:100%;
      max-width:290px;
      max-height: 374px;
    }

    #product-info{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding-top:5px;
    }

    #product-info p{
      font-size: 16px;
      line-height: 23px;
    }

    #color-options{
      display:flex;
      justify-self:end;
    }

    #color-options img{
      width: 13px;
      padding-left: 3px;
      justify-self: end;
    }
  }
`

export const PhotoloaderMobile = styled.div`
  margin: 0 15px;

  .photo-loader-mobile{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin:0 auto;
  }

  img{
    max-width: 100%;
    justify-self:center;
  }


  p,
  #product-info-mobile p{
    font-size: 12px;
    line-height: 20px;
    display: flex;
    
  }
  @media(min-width: 780px){
    display: none;
  }
`
