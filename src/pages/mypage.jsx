import * as React from 'react';
import "./Mypage.css";
const Mypage = () => {
  return (
    <div className="div">
      <div className="child" />
      <img className="gobackicon" alt="" src="/img/goback.png" />
      <img className="greyhomeicon" alt="" src="/img/greyhome.png" />
      <img className="shoppingcarticon" alt="" src="/img/shoppingcart.png" />
      <img className="favoritebordericon" alt="" src="/img/favoriteborder.png"/>
      <img className="redaccounticon" alt="" src="/img/redaccount.png" />
      <div className="greyhome">Home</div>
      <div className="shoppingcart">Cart</div>
      <div className="favoriteborder">Like</div>
      <div className="redaccount">MY</div>
      <img className="bottomline" alt="" src="/img/bottomline.png"></img>
      <div className='purchase-history'>Purchase History</div>
      <img className='profileimg' alt='' src='/img/profileimg.png'></img>
      <div className="username">Seobin Won</div>
      <div className="address">@seop_son</div>
      <div className="school">Ewha womans university</div>
      <img className='profileline' alt='' src='/img/profileline.png'/>
      <img className='profilebox' alt='' src='/img/profilebox.png'></img>
      <img className="edit-icon" alt="" src="/img/edit.png" />
      <div className="nfts">NFTs</div>
      <div className="line-div" />
      <div className="history-num">3</div>
      <div className="nfts-num">2</div>
      <div className="settings">{`설정 `}</div>
    </div>
  );
};

export default Mypage;
