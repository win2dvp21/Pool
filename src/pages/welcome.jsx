import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';


//시작 화면 Home

export default function Welcome() {

    const navigate = useNavigate();

    const go_wallet = () => {
        navigate('/wallet'); // '/wallet' 페이지로 이동
    };

    return (
        <div>

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
                Welcome!
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
                onClick={go_wallet}
            >
                Next
            </Button>
        </div>
    );
}