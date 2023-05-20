import * as React from 'react';
import "./ShoppingHistory.css";
import greyhomeicon from '../img/greyhome.png';
import shoppingcarticon from '../img/shoppingcart.png';
import favoritebordericon from '../img/favoriteborder.png';
import redaccounticon from '../img/redaccount.png';
import bottomline from '../img/bottomline.png';
import first_purchase_box from '../img/purchasebox.png';
import box_bluetag from '../img/boxbluetag.png';
import greyfilter from '../img/greyfilter.png';
import firstjacket from '../img/ewhajacket.png';
import second_purchase_box from '../img/purchasebox.png';
import box_greytag from '../img/boxgreytag.png';
import secondjacket from '../img/ewhajacket.png';
import third_purchase_box from '../img/purchasebox.png';
import ewhatshirt from '../img/ewhatshirt.png';
import user1 from '../img/user.png';
import user2 from '../img/user.png';
import user3 from '../img/user.png';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

export default function ShoppingHistory() {
    const navigate = useNavigate();

    const goBackPage = () => {
        navigate('/Mypage');
    };
    return (
        <div className="div29">

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

            <div className="child49" />

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
            </div>

            <img className='first-purchase-box' alt="" src={first_purchase_box} />
            <img className='box-bluetag' alt="" src={box_bluetag} />
            <div className="firstparticipants">34/50</div>
            <div className="child50" />

            <div className="history2">Ewha w. univ. Pear Flower Jacket</div>
            <div className="sizexl">XL</div>
            <div className="price-3">65,000 won</div>
            <div className="d-24">D-24</div>
            <div className="secondparticipants">3 / 50</div>

            <img className='greyfilter' alt="" src={greyfilter} />
            <img className='firstjacket' alt="" src={firstjacket} />
            <img className='second-purchase-box' alt="" src={second_purchase_box} />
            <img className='box-greytag' alt="" src={box_greytag} />
            <div className="purchase-history">Purchase History</div>
            <img className='secondjacket' alt="" src={secondjacket} />

            <div className="history1">Ewha w. univ. Pear Flower Jacket</div>
            <div className="firstsizem">M</div>
            <div className="price-2">65,000 won</div>
            <div className="d-1">D-1</div>

            <img className='third-purchase-box' alt="" src={third_purchase_box} />
            <div className="thirdparticipants">34 / 50</div>
            <img className='ewhatshirt' alt="" src={ewhatshirt} />
            <div className="history3">Ewha w. univ. black T-shirts</div>
            <div className="secondsizem">M</div>
            <div className="price-1">65,000 won</div>
            <div className="order-fulfilled">Order Fulfilled</div>
            <div className="thirdparticipants">34 / 50</div>
            <img className='user1' alt="" src={user1} />
            <img className='user2' alt="" src={user2} />
            <img className='user3' alt="" src={user3} />


        </div>
    );
}