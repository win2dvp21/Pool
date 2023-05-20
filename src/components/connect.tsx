import { useWeb3ConnectionContext } from '../context/web3Connection.context';
import styled from 'styled-components';
import { NoCoreWalletError } from '@avalabs/web3-react-core-connector';
import { useState } from 'react';
import { CoreNotFoundError } from './coreNotFoundError';
import logo from '../images/core.svg';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CoreOwl from '../img/CoreOwl.png';
import poollogo from '../img/logo.png';

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 72px;
  background-color: #3a3a3c;
  border-radius: 8px;
  border: none;
  transition: background-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #ffffff;
  padding: 12px;
  cursor: pointer;
  position: relative;
  left: 40px;
  top: 640px;

  &:hover {
    background-color: #323232;
  }
`;

const Text = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
`;

export function Connect() {
  const { connector, useIsActive, useAccount } = useWeb3ConnectionContext();
  const isActive = useIsActive();
  const activeAccount = useAccount();
  const [activationError, setActivationError] = useState<Error>();

  const navigate = useNavigate();

  const go_welcome = () => {
    navigate('/'); // '/welcome' 페이지로 이동
  };
  const go_info = () => {
    navigate('/information'); // '/information' 페이지로 이동
  };

  if (activationError instanceof NoCoreWalletError) {
    return <CoreNotFoundError />;
  }

  if (!isActive) {
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
          src={poollogo}
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
            width: '300px',
            height: '72px',
            left: '50%',
            top: '770px',
            borderRadius: '15px',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(92.48deg, #AAA4E9 2.41%, #D09FDE 29.18%, #E1879C 64.76%, #F58282 97.3%)'
          }}
          onClick={go_info}
        >
          Next
        </Button>
        <ConnectButton
          onClick={() => connector.activate().catch((e) => setActivationError(e))}
        >
          <Text>Connect with Core</Text>
          <img height={48} src={logo} alt="logo" />
        </ConnectButton>
      </div>
    );
  }

  return (
    <div>

      <strong>Connected:</strong>
      <br />
      {activeAccount}

      <Button
        variant="contained"
        style={{
          position: 'absolute',
          width: '300px',
          height: '72px',
          left: '50%',
          top: '770px',
          borderRadius: '15px',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(92.48deg, #AAA4E9 2.41%, #D09FDE 29.18%, #E1879C 64.76%, #F58282 97.3%)'
        }}
        onClick={go_info}
      >
        Next
      </Button>
    </div>
  );
}
