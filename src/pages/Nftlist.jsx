import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Nftlist.css";

const Nftlist = () => {

    const navigate = useNavigate();

    const go_mypage = () => {
        navigate('/mypage');
    };

    const goPoolNft = () => {
        navigate('/Poolnft');
    }

    const goGooodsNft = () =>{
        navigate('/Gooodsnft')
    }
    return (
        <div>
            <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
                onClick={go_mypage}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <p
                style={{
                    position: 'absolute',
                    left: '7.95%',
                    top: '12.68%',
                    bottom: '83.89%',
                    fontFamily: 'Pretendard',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#666666',
                }}
            >
                NFT Collection
            </p>
            

            <Button
                color="secondary"
                style={{
                    position: 'absolute',
                    width: '155px',
                    height: '220px',
                    left: '32px',
                    top: '179px',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    padding: 0, 
                    overflow: 'hidden', 
                }}
            >
                <img
                    className='nftpool-1'
                    alt=''
                    src="/img/nftpool1.png"
                    style={{
                        top: '3%',
                        left: '0%',
                        width: '100%',
                        height: '66%',
                        objectFit: 'contain',
                    }}
                    onClick={goPoolNft}
                />
            </Button>

            <Button
                color="secondary"
                style={{
                    position: 'absolute',
                    width: '155px',
                    height: '220px',
                    left: '203px',
                    top: '179px',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    padding: 0, 
                    overflow: 'hidden',
                }}
            >
                <img
                    className='nftpool-2'
                    alt=''
                    src="/img/gooodsnft1.png"
                    style={{
                        top: '3%',
                        left: '0%',
                        width: '100%',
                        height: '66%',
                        objectFit: 'contain',
                    }}
                    onClick={goGooodsNft}
                />
            </Button>

            <div className='poolcd'>POOL CD #13</div>
            <div className='poolcddate'>2023.02.03</div>
            <div className='poolcdname'>@seop_son</div>
            <div className='Gooods'>GOOOOOODS #7</div>
            <div className='Gooodsdate'>2023.04.21</div>
            <div className='Gooodsname'>@seop_son</div>
        </div>
    );
};

export default Nftlist;

