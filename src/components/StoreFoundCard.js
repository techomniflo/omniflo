import React from 'react';
import { distance } from '../Data Constants/Data';
import { styled, Button } from '@mui/material';

const StoreFoundCard = () => {
  return (
    <StyleDivElement>
        <div className='card'>
            <p className='distance'>{distance}m Away</p>
            <p className='name'>Jmd Supermart</p>
            <p className='location'>Koramangala</p>
            <Button><img src="../images/location.svg" alt="icon"/> Take me there </Button>
        </div>
    </StyleDivElement>
  )
}

const StyleDivElement = styled('div')`
.card{
    margin:  20px;
    padding: 20px 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
    

    .distance{
        margin: 0;
        padding: 20px 0;
        font-weight: 600;
        font-size: 32px;
        line-height: 24px;
        background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
       text-align: center;
    }
    .name{
        margin: 5px 0 0 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
    }
    .location{
        margin: 5px 0 0 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;

    }
    button{
      background: linear-gradient(-45deg, #FFA63D, #3F0BDB, #FF0C67,#338AFF);
      background-size: 600%;
      border-radius: 20px;
      margin: 10px 20px 20px 20px;
      font-weight: 600;
      font-size: 16px;
      text-transform: none;
      color: #fff;
      font-family: 'Poppins', sans-serif; 
      text-decoration: none;
      padding: 10px 0;
      position: relative;
      text-transform: uppercase;
      animation: anime 16s linear infinite;

      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }
  }

    @keyframes anime {
        0%{
        background-position: 0% 50%
        }
        50%{
        background-position: 100% 50%
        }
        100%{
        background-position: 0% 50%
        }
    }
}
`;
export default StoreFoundCard