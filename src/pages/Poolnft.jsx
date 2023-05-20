import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import "./Poolnft.css";

const Poolnft = () => {

    const navigate= useNavigate();

    const goToNextScreen = () => {
        navigate('/nftlist');
    };
    
    return (
    <div>
        <button onClick={goToNextScreen}>
            <img className='goback-button' alt='' src="/img/goback.png"/>
        </button>
        <div className='NFT-Collection'>NFT Collection</div>
        <img className='Poolnft' alt='' src='/img/nftpool1.png'/>
        <div className='name'>POOL CD #13</div>
        <div className='date'>2023.02.03</div>
        <img className='prenft1' alt='' src='/img/nftpool2.png'/>
        <img className='prenft2' alt='' src='/img/nftpoolpink.png'/>
        <img className='prenft3' alt='' src='/img/nftpoolgreen.png'/>
    </div>
  );
};

export default Poolnft;

