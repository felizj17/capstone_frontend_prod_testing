import './landing.css';
import Auth from '../../components/auth/Auth';
import { useState } from 'react';


//docs for cards: https://mui.com/joy-ui/react-card/ 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { Typography } from '@mui/material';

import { AwesomeButton } from 'react-awesome-button';


import CatCarousel from '../../components/categories-carousel/CatCarousel';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

export default function Landing() {

    return (
        <>
        {/* <Auth craftopiaLogo={craftopiaLogo} /> */}
        <header>
        
        <div className='header-branding'>
        <Card sx={{ border: 1, borderColor: '#D1C4E9', width: '87%' }} >
        {/* <img className='landing-logo' src={craftopiaLogo} alt='craftopia logo' /> */}
        <div className='landing-action'>  
          <div className='branding-text'>
          <h2 className='header-h2'> Ignite Your Creativity </h2>
          <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
          <AwesomeButton type='primary'> Join The Fun </AwesomeButton>
          
          {/* <Button className='join-btn' variant='soft' size='sm' sx={{ color: 'white', fontFamily: 'Lato'}}> <Typography sx={{ fontWeight: 'regular', fontSize: 12 }} > Join Us </Typography> </Button> */}
          </div>
          <div>
          <img src={ArtistsGraphic} className='artists-graphic' />
          </div>
        </div>
        </Card >
        </div>
        
        <br />
        {/* <div className='div' /> */}
        <br />
        
        </header>
        <br />
        <main>
          <CatCarousel />
          <br />
          <div>
          <h3 className='top-categories-h3'> Top Categories </h3>
          <br />
          <div >
          <p className='top-category-p'> Photography </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div >
          <p className='top-category-p'> Painting </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div>
          <p className='top-category-p'> Digital Art </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          </div>
          <br />
        </main>
        </> 
    )
}