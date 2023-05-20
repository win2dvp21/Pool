import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import "./Component.css";
export default function Main() {

  const navigate = useNavigate();

  const go_detail = () => {
    navigate('/detail'); // '/detail' 페이지로 이동
  };

  const go_design = () => {
    navigate('/design'); // '/design' 페이지로 이동
  }

  return (
    <div className="div">

      <img className="wallet" src="/img/wallet.png" alt="wallet" />
      <div className="child" />
      <div className="item" />
      <img className="searchbox" alt="" src="/img/searchbox.png" />
      <img className="prelogo" alt="" src="/img/prelogo.png" />

      <Button
        color="secondary"
        style={{
          position: 'absolute',
          width: '200px',
          height: '215px',
          left: '24px',
          top: '227px',
          background: '#FFFFFF',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          padding: 0,
          overflow: 'hidden',
        }}
        onClick={go_detail}
      >

        <img alt="" src="/img/ewhajacket.png" />
      </Button>

      <img className="child1" alt="" src="/img/ewhatshirt.png" />
      <img className="ellipse-icon" alt="" src="/img/varsityjacket.png" />
      <img className="child2" alt="" src="/img/windbreaker.png" />
      <img className="child3" alt="" src="/img/tshirts.png" />
      <img className="child4" alt="" src="/img/hoodie.png" />
      <img className="child5" alt="" src="/img/benchjacket.png" />
      <img className="child6" alt="" src="/img/uniform.png" />
      <img className="child7" alt="" src="/img/longsleeve.png" />
      <img className="child8" alt="" src="/img/accesory.png" />
      <div className="varsity-jacket">Varsity jacket</div>
      <div className="bench-jacket">Bench jacket</div>
      <div className="uniform">Uniform</div>
      <div className="long-sleeve">Long Sleeve</div>
      <div className="accesory">Accesory</div>
      <div className="top-products">Top products</div>
      <div className="windbreaker">Windbreaker</div>
      <div className="t-shirts">T-shirts</div>
      <div className="hoodie">Hoodie</div>
      <img className="vector-icon" alt="" src="/img/vector.png" />

      <div
        style={{
          position: 'fixed',
          height: '10%',
          bottom: '0px',
          left: 0,
          right: 0,
          borderTop: '1px solid #D9D9D9',
          display: 'flex'
        }}
      >

        <img className="home-icon" alt="" src="/img/Home.png" />
        <img className="shopping-cart-icon" alt="" src="/img/shoppingcart.png" />
        <img className="favorite-border-icon" alt="" src="/img/favoriteborder.png" />
        <img className="account-circle-icon" alt="" src="/img/accountcircle.png" />
        <div className="home">Home</div>
        <div className="cart">Cart</div>
        <div className="like">Like</div>
        <div className="my">MY</div>
      </div>

      <img className="ewha" alt="" src="/img/ewha.png" />

      <IconButton
        style={{
          position: 'absolute',
          top: '702px',
          left: '317px',
          border: '1px solid gray'
        }}
        onClick={go_design}
        >
          <EditOutlinedIcon />
      </IconButton>
      
    </div>

  );
};

