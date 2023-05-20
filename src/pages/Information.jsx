import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextField from '@mui/material/TextField';
import logo from '../img/logo.png';

//정보 입력 화면 Information

export default function Information() {

    const navigate = useNavigate();

    const go_wallet = () => {
        navigate('/connect'); // '/wallet' 페이지로 이동
    };
    const go_main = () => {
        navigate('/main'); // '/main' 페이지로 이동
    };


    return (
        <div>

            <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
                onClick={go_wallet}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <p
                style={{
                    position: 'absolute',
                    left: '7.95%',
                    right: '59.23%',
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
                Information
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

            <TextField required
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '28.91%',
                    bottom: '65.76%',
                    borderRadius: '8px',
                    borderColor: '#EC6D67'
                }}
            />

            <TextField required
                id="outlined-basic"
                label="ID"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '43.48%',
                    bottom: '51.18%',
                    borderRadius: '8px'
                }}
            />

            <TextField required
                id="outlined-basic"
                label="University"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '58.06%',
                    bottom: '36.61%',
                    borderRadius: '8px'
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
                onClick={go_main}
            >
                Start!
            </Button>
        </div>
    );
}