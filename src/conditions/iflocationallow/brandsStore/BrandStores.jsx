import React,{useState, useEffect} from 'react';
import { styled} from '@mui/material';
import LoadingScreen from '../../../loader/LoadingScreen';
import Header from '../../../components/Header';
import SpotlightXBrand from '../../../components/SpotlightXBrand';
import StoreFoundCard from '../../../components/StoreFoundCard';
import Usp from '../../../components/Usp';
import Footer from '../../../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const BrandStores = (props) => {
  const [loading, setLoading] = useState(false);

  const brand = useParams();
  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`

  useEffect(() => {
    axios.get(`${brandDetailURL}`,{
      headers: {
        'Content-Type': 'text/html',
      },
    }).then(resp => {
      
      props.brandName(resp.data)
    })
  
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },6000)
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div style={{backgroundColor: '#171717'}}>
          <Header/>
            <StyleDivElement>
              <SpotlightXBrand data={props.data}/>
              <hr/>
              {
                loading ?  
                  <LoadingScreen/>
                : 
                  <StoreFoundCard data={props.data}/>
              }
              <Usp data={props.data}/>
              <Footer/>
            </StyleDivElement> 
      </div>
    </>
  )
};



const StyleDivElement = styled('div')`
  hr{
    width: 50%;
    height: 0px;
    margin: auto;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
  }
`;

export default BrandStores;