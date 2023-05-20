import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import "./Poolnft.css";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Poolnft = () => {

    const navigate= useNavigate();
    const goBackPage = () => {
        navigate('/nftlist');
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
        <img className='Poolnft' alt='' src='/img/nftpool1.png'/>
        <div className='name'>POOL CD #13</div>
        <div className='date'>2023.02.03</div>
        <img className='prenft1' alt='' src='/img/nftpool1.png'/>
        <img className='prenft2' alt='' src='/img/nftpool2.png'/>
        <div className='NFT-Collection'>NFT Collection</div>
        <img className='prenft3' alt='' src='/img/nftpool3.png'/>
    </div>
  );
};

export default Poolnft;

