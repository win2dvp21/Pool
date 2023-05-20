import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from '../img/logo.png';

export default function Home() {
  const navigate = useNavigate();

  const go_wallet = () => {
    navigate('/connect'); // '/wallet' 페이지로 이동
  };

  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{
          position: 'absolute',
          top: '45.97%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <Button
        disableRipple
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        onClick={go_wallet}
      >
      </Button>
    </div>
  );
}
