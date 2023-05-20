import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CoreOwl from '../img/CoreOwl.png';
import logo from '../img/logo.png';

//지갑 연결 화면 wallet

export default function Wallet() {

    const navigate = useNavigate();

    const go_welcome = () => {
        navigate('/welcome'); // '/welcome' 페이지로 이동
    };
    const go_info = () => {
        navigate('/information'); // '/information' 페이지로 이동
    };

    return (
        <div>

            <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
                onClick={go_welcome}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <p
                style={{
                    position: 'absolute',
                    left: '7.95%',
                    right: '41.28%',
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
                Select your wallet
            </p>

            <img
                src={logo}
                alt="Logo"
                style={{
                    position: 'absolute',
                    width: '107px',
                    height: '27px',
                    left: '64.62%',
                    right: '7.95%',
                    top: '15%',
                    bottom: '83.89%',
                }}
            />

            <Button
                color="secondary"
                style={{
                    position: 'absolute',
                    left: '24.1%',
                    right: '24.36%',
                    top: '34.72%',
                    bottom: '34.71%',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 13.5811px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10.85px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img src={CoreOwl} alt=""
                    style={{
                        width: '100%'
                    }}
                />
                <span style={{
                    marginBottom: '30px',
                    color: 'black', 
                    
                    }}>
                        Core Wallet</span>
            </Button>


            <Button
                variant="contained"
                style={{
                    position: 'absolute',
                    width: '331px',
                    height: '62px',
                    left: '50%',
                    top: '732px',
                    borderRadius: '15px',
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(92.48deg, #AAA4E9 2.41%, #D09FDE 29.18%, #E1879C 64.76%, #F58282 97.3%)'
                }}
                onClick={go_info}
            >
                Next
            </Button>

        </div >
    )
}

