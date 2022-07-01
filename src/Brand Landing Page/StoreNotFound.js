import React from 'react';
import { imageData } from '../Data Constants/Data';
import styled from '@emotion/styled';
import { TextField, Button} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { distance } from '../Data Constants/Data';


const StoreNotFound = () => {


  return (
    <div style={{backgroundColor: '#171717'}}>
        <StylePElement><a href="/">Spotlight</a></StylePElement>
        
        { imageData.map(data => (
          <StyleDivElement>
            <div className='img'>
              <img src="../images/spotlight logo.jpg" alt="Spotlight Logo"/> <span> X </span><img src="../images/rage coffee img.png" alt={data.alt}/>
            </div>
            <h6>
              <b>{data.name}</b>
              <span> is now on </span>
              <b> Spotlight </b>
            </h6>
            <hr className='hr1'/>
            <div className='card'>
                <p className='store'>THE NEAREST STORE IS</p>
                <p className='distance'>{distance}km Away</p>
                <hr className='hr2'/>
                <p className='text1'>How Far Will You Go for Love? </p>
                <p className='text2'>Instead, let us Notify you when we launch near you. </p>
                <StyleTextFiled id="outlined-basic" label="Full name" variant="outlined" size="small" />
                <StyleTextFiled id="outlined-basic" label="Phone number" variant="outlined" size="small" />
                <StyleTextFiled id="outlined-basic" label="Location" variant="outlined" size="small" />
                <Button><img src="../images/discount.svg" alt="icon"/> Get 25% off on Launch </Button>
            </div>

            <div className="story">
              <div className='heading'>
                <img className='image1' src="../images/rage coffee img.png" alt={data.alt}/>
                <div>
                  <h4>STORY OF</h4> 
                  <p>{data.name}</p>
                </div>
              </div>

              <div className='body'>
                <img className='image2' src='../images/virat rc transparent.png' alt="Virat Kohli"/>
                <p>{data.story}</p>
              </div>
              <div className="logos">
                  <div className="icon">
                    <img className='logo' src="../images/icon-1.svg" alt=""/>
                    <img className='logo' src="../images/icon-2.svg" alt=""/>
                    <img  className='logo' src="../images/icon-3.svg" alt=""/>
                  </div>
                  <div className="icon-text">
                    <p className='logo-text'>No Gut Health</p>
                    <p className='logo-text'>No Bitterness</p>
                    <p className='logo-text'>Rich Aroma</p>
                  </div> 
              </div>
            </div>
           
            <footer>
              <div className='footer'>
                <img src="../images/spotlight logo.jpg" alt="spotlight logo"/>
                <p>Spotlight is The Coolest Retail Shelf that brings premium online brands near you!</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}} className="MUIIcon">
                <InstagramIcon />
                <TwitterIcon/>
              </div>
              
              <hr/>
              <p> &copy; 2022 Spotlight</p>
            </footer>
            
          </StyleDivElement>
        ))}
    </div>
  )
};

const StylePElement = styled('p')`
  padding: 10px 20px;
  
  line-height: 24px;
  background-color: black;
  width: auto;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`;


const StyleTextFiled = styled(TextField)`
    border-radius: 5px;
    margin: 10px 20px 20px 20px;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    
`;
const StyleDivElement = styled('div')`
  
  .img{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

  img{
    width: 112px;
    height: 112px;
    
    border-radius: 50%;
  }
  span{
    margin-top: 50px;
  }
  h6{
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    margin: 10px;
  }

  .hr1{
    width: 218px;
    height: 0px;
    margin: 2px 0 0 20%;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
  }
  

  .card{
    margin:  20px;
    padding: 20px 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
    

    p{
    text-align: center;
    
    }
    
    .distance{
        font-weight: 600;
        font-size: 32px;
        line-height: 24px;
        text-transform: capitalize;
        background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding: 10px;
        margin-bottom: 0;
    }
    .text1{
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 0;
    }
    .text2{
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        padding: 0 40px;
        margin-top: 5px;
    }
    .store{
        font-weight: 400;
        font-size: 11px;
        line-height: 16px;
        margin: 0;
    }
    .hr2{
    width: 218px;
    height: 0px;
    margin: 10px auto;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;

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
      animation: anime 16s linear infinite;

      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
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

  .story{
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    margin:  20px;
    padding: 20px 0px;
    border: 1px solid  rgba(255, 255, 255, 0.2);

    .heading{
      display: flex;
      color: rgba(255, 255, 255, 0.6);
      padding: 10px 20px;
      .image1{
        width: 50px;
        height: 50px;
        border-radius: 2px;
        margin-right: 10px;
       
      }
      h4{
        margin-bottom: 0;
        font-size: 24px;
        font-weight: 700;
      }
      p{
        font-size: 13px;
        text-transform: uppercase;
        margin-bottom: 0;
        letter-spacing: 19%;
      }
    }
    
    .body{
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
      .image2{
        width: 150px;
        height: 150px;
        border-radius: 0;
        margin: 10px ;
      }
      p{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 5px;
      }
    }
    .logos{
      box-sizing: border-box;
      border: 1px solid #ADADAD;
      border-radius: 8px;
      margin: 10px 20px;
      padding: 20px 10px;
    }
    .icon{
      display: flex;
      text-align: center;
      justify-content: space-around;
      
    }
    .logo{
      width: 30px;
      height: 26px;
      margin: 0px 20px;
      
    }
    .icon-text{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .logo-text{
      font-size: 11px;
      margin: 0 5px;
      color:  rgba(173, 173, 173, 1);
      

    }
    
  }

  footer{
    padding: 20px 40px;
    background-color: rgba(43, 43, 43, 1);
    .footer{
      display: flex;
      margin-bottom: 10px;
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      p{
        color: rgba(173, 173, 173, 1);
        font-size: 11px;
        text-align: unset;
        margin: 0;
      }
    }
    hr{
      border: 0.8px solid #383838;
    }
    p{
      font-size: 11px;
      color: rgba(153, 153, 153, 1);
      margin: 5px;
      text-align: center;
    }
    svg{
      font-size: 20px;
      text-align: center;
      align-items: center;
      margin: 10px;
      color: rgba(153, 153, 153, 1);
    }
  }
`;

export default StoreNotFound;