import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import "./Gooodsnft";

const Gooodsnft = () => {

    const navigate= useNavigate();

    const goToNextScreen = () => {
        navigate('/Nftlist');
    };
    
    return (
    <div>
        <button onClick={goToNextScreen}>
            <img className='goback-button' alt='' src="/img/goback.png"/>
        </button>
        <div className='NFT-Collection'>NFT Collection</div>
        <img className='Gooodsnft' alt='' src="/img/gooodsnft.png"/>
        <img className='Gooodsnftyellow' alt='' src="/img/gooodsnftyellow.png"/>
        <img className='Gooodsnftblue' alt='' src="/img/gooodsnftblue.png"/>
        <img className='Gooodsnftorange' alt='' src="/img/gooodsnft.png"/>
        <div className='name'>GOOOOOODS #7</div>
        <div className='date'>2023.04.21</div>
    </div>
  );
};

export default Gooodsnft;