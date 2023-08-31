//import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import CatCarousel from "../../components/categories-carousel/CatCarousel";
import './home.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {

    //apply state for the quiz ad
    const [quizComplete, setQuizComplete] = useState(false);

    return (

        <div>
            <CatCarousel />
            <div className="home-header">
                <h3 className="home-h3"> Ignite Your Creativity </h3>
            </div>
            <div>
                {/* post box here 
                REDESIGNING*/}
            </div>
            <div>
                {/* categories generated by user interest here */}
            </div>
            <div className="div" />
            <div>
               <p className="user-connect-p"> Meet, trade, connect with other creatives in your city </p> 
               <button className="arrow"> <ArrowBackIosIcon /> </button>
               {/* user info from dummy accounts here */}
               <button className="arrow"> <ArrowForwardIosIcon /> </button>
            </div>
        </div>
    )
}
