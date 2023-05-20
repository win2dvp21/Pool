import * as React from 'react';
import "./Mypage.css";
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Mypage = () => {

  const navigate = useNavigate();
  const goBackPage = () => {
    navigate('/Main');
  }

  const goNftPage = () => {
    navigate('/Nftlist');
  }

  const goPurchaseHistoryPage = () => {
    navigate('/ShoppingHistory');
  }

  const go_mypage = () => {
    navigate('/mypage'); // '/mypage' 페이지로 이동
  }

  return (
    <div className="div">
      <div className="child" />
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

        <img className="greyhomeicon" alt="" src="/img/greyhome.png" />
        <img className="shoppingcarticon" alt="" src="/img/shoppingcart.png" />
        <img className="favoritebordericon" alt="" src="/img/favoriteborder.png" />
        <img className="redaccounticon" alt="" src="/img/redaccount.png" />
        <div className="greyhome">Home</div>
        <div className="cart">Cart</div>
        <div className="like">Like</div>
        <div className="redaccount">MY</div>
      </div>

      <img className='mypagelowline' alt='' src='/img/mypagelowline.png' />
      <button className='purchasehistory' onClick={goPurchaseHistoryPage}>
        Purchase History
      </button>
      <img className='profileimg' alt='' src='/img/profileimg.png'></img>
      <div className="username">Seobin Won</div>
      <div className="address">@seop_son</div>
      <div className="school">Ewha womans university</div>
      <img className='profileline' alt='' src='/img/profileline.png' />
      <img className='profilebox' alt='' src='/img/mypagebox.png'></img>
      <img className="edit-icon" alt="" src="/img/edit.png" />
      <button className="nfts" onClick={goNftPage}>
        NFTs
      </button>
      <img className='mypage-middleline' alt='' src='/img/mypagemiddleline.png' />
      <div className='recently-viewed'>Recently Viewed Products</div>
      <div className="history-num">3</div>
      <div className="nfts-num">2</div>
      <img className='mypage-firstproduct' alt='' src='/img/mypagefirst.png' />
      <img className='mypage-secondproduct' alt='' src='/img/mypagesecond.png' />
      <img className='mypage-thirdproduct' alt='' src='/img/mypagethird.png' />
      <img className='mypage-fourthproduct' alt='' src='/img/mypagefourth.png' />
      <img className='scrollnext' alt='' src='/img/scrollnext.png' />
      <div className='firstprice'>65,000KRW</div>
      <div className='secondprice'>63,000KRW</div>
      <div className='thirdprice'>70,000KRW</div>
      <div className='fourthprice'>65,000KRW</div>
      <div className='Help'>Help</div>
      <div className='Faq'>FAQ</div>
      <div className='CustomerSupport'>Customer Support</div>
    </div>
  );
};

export default Mypage;
