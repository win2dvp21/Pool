import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MobileStepper from '@mui/material/MobileStepper';

import productmain from '../img/productmain.png';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import detail from '../img/detail.png';

export default function Detail() {
    const navigate = useNavigate();

    const go_main = () => {
        navigate('/main'); // '/main' 페이지로 이동
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const favoriteLabel = isFavorite ? "29" : "28";

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };


    return (
        <div>

            <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
                onClick={go_main}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <img
                src={productmain}
                alt="프로덕트 메인이미지"
                style={{
                    width: '390px',
                    height: '212px',
                    position: 'relative',
                    top: '100px'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '305px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '330px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '390px',
                    height: '8px',
                    backgroundColor: '#F1F1F1'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '343px',
                    left: '20px',
                    width: '21px',
                    height: '21px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '343px',
                    left: '45px',
                    fontSize: '12px',
                    color: '#7B7B7B'
                }}
            >
                kkakkoong
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '377px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#D9D9D9'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '398px',
                    left: '20px',
                    fontSize: '28px',
                    fontFamily: 'Inter',
                    fontWeight: 'bold'
                }}
            >
                65,000 KRW
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '419px',
                    right: '20px',
                    fontSize: '12px',
                    color: '#5196FF',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div style={{ marginRight: '3px' }}>•••</div>
                <div>(27/50명)</div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '436px',
                    fontSize: '14px',
                    left: '20px'
                }}
            >
                Ewha w. univ. Pear Flower Jacket
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '482px',
                    fontSize: '14px',
                    color: '#7B7B7B',
                    left: '20px'
                }}
            >
                Order Period
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '482px',
                    left: '120px',
                    fontSize: '14px',
                    color: '#000000'
                }}
            >
                5.1 ~ 5.13
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '505px',
                    fontSize: '14px',
                    color: '#7B7B7B',
                    left: '20px'
                }}
            >
                Number
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '505px',
                    left: '120px',
                    fontSize: '14px',
                    color: '#000000'
                }}
            >
                10 ~ 50 <span style={{ color: '#7B7B7B' }}>people</span>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '539px',
                    left: '20px',
                    fontSize: '10px',
                    color: '#A7A7A7',
                    maxWidth: '220px',
                    whiteSpace: 'pre-wrap'
                }}
            >
                *If the minimum number of people is not met,
                the payment will be canceled automatically.
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '578px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '390px',
                    height: '8px',
                    backgroundColor: '#F1F1F1'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '599px',
                    left: '20px',
                    color: '#7B7B7B',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px'
                }}
            >
                More Details
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '630px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#D9D9D9'
                }}
            />

            <img
                src={detail}
                alt="detail"
                style={{
                    position: 'absolute',
                    width: '350px',
                    height: '146px',
                    left: '5%',
                    top: '613px',
                }}
            />

            <div
                style={{
                    position: 'fixed',
                    height: '10%',
                    bottom: '0px',
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    borderTop: '1px solid #D9D9D9',
                    background: '#FFFFFF',
                    display: 'flex',
                    justifyContent: 'space-between', // 좌우 정렬
                    padding: '0 10px', // 좌우 여백
                    alignItems: 'center' // 수직 정렬
                }}
            >
                <BottomNavigation
                    showLabels
                    value={activeStep}
                    onChange={(event, newValue) => {
                        setActiveStep(newValue);
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: '50%'
                    }}
                >
                    <BottomNavigationAction
                        label={favoriteLabel}
                        icon={isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon style={{ color: 'red' }} />}
                        onClick={handleFavoriteClick}
                    />

                </BottomNavigation>

                <Button
                    variant="contained"
                    style={{
                        position: 'absolute',
                        width: '270px',
                        height: '52px',
                        left: '60%',
                        top: '50%',
                        borderRadius: '15px',
                        transform: 'translate(-50%, -50%)',
                        background: 'linear-gradient(92.48deg, #AAA4E9 2.41%, #D09FDE 29.18%, #E1879C 64.76%, #F58282 97.3%)',
                        boxShadow: 'none'
                    }}
                >
                    Add To Buy
                </Button>
            </div>

        </div>
    );
}
