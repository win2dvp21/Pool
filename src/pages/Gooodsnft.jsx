import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import "./Gooodsnft.css";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Gooodsnft = () => {

    const navigate= useNavigate();

    const goBackPage = () => {
        navigate('/Nftlist');
    };
    
    return (
    <div>
        <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
                onClick={goBackPage}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
        <div className='NFT-Collection'>NFT Collection</div>
        <img className='Gooodsnft' alt='' src="/img/gooodsnft1.png"/>
        <img className='Gooodsnft1' alt='' src="/img/gooodsnft3.png"/>
        <img className='Gooodsnft2' alt='' src="/img/gooodsnft2.png"/>
        <img className='Gooodsnft3' alt='' src="/img/gooodsnft1.png"/>
        <div className='name'>GOOOOOODS #7</div>
        <div className='date'>2023.04.21</div>
    </div>
  );
};

export default Gooodsnft;