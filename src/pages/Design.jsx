import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import TextField from '@mui/material/TextField';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function Design() {

    const navigate = useNavigate();

    const go_main = () => {
        navigate('/main'); // '/main' 페이지로 이동
    };

    const [minimumCount, setMinimumCount] = useState(0);
    const [maximumCount, setMaximumCount] = useState(0);

    const handleMinimumIncrement = () => {
        setMinimumCount(minimumCount + 1);
    };
    const handleMinimumDecrement = () => {
        setMinimumCount(minimumCount - 1);
    };
    const handleMaximumIncrement = () => {
        setMaximumCount(maximumCount + 1);
    };
    const handleMaximumDecrement = () => {
        setMaximumCount(maximumCount - 1);
    };

    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const [setSelectedFile] = useState(null);
    // const [selectedFile, setSelectedFile] = useState(null); 나중에 백엔드로 선택한 이미지 보낼 때 위에 줄 말고 이거 사용
    const [previewURL, setPreviewURL] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const fileURL = e.target.result;
                setPreviewURL(fileURL);
            };

            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
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

            <IconButton
                style={{
                    position: "absolute",
                    top: '5.3%',
                    left: '84%'
                }}
            >
                <SendIcon />
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
                Post
            </p>

            <div
                style={{
                    position: 'absolute',
                    top: '203px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Product Name
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '198px',
                    left: '126px',
                    width: '240px',
                    height: '27px'
                }}
            >
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        height: '100%',
                        '& .MuiOutlinedInput-root': {
                            height: '100%',
                        },
                    }}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '252px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                University
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '247px',
                    left: '126px',
                    width: '240px',
                    height: '27px'
                }}
            >
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        height: '100%',
                        '& .MuiOutlinedInput-root': {
                            height: '100%',
                        },
                    }}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '301px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Product Type
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '296px',
                    left: '126px',
                    width: '240px',
                    height: '27px'
                }}
            >
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        height: '100%',
                        '& .MuiOutlinedInput-root': {
                            height: '100%',
                        },
                    }}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '350px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Order Period
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '345px',
                    left: '126px',
                    width: '110px',
                    height: '27px'
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        defaultValue={dayjs('2022-04-17')}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" style={{ height: '100%' }} />
                        )}
                        style={{ height: '100%', width: '100%' }}
                    />
                </LocalizationProvider>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '345px',
                    left: '256px',
                    width: '110px',
                    height: '27px'
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        defaultValue={dayjs('2022-05-17')}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" style={{ height: '100%' }} />
                        )}
                        style={{ height: '100%', width: '100%' }}
                    />
                </LocalizationProvider>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '425px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Minimum Number
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '420px',
                    left: '269px',
                    width: '95px',
                    height: '27px',
                    border: '1px solid lightgray',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <button onClick={handleMinimumDecrement}>-</button>
                <span style={{ margin: '0 10px' }}>{minimumCount}</span>
                <button onClick={handleMinimumIncrement}>+</button>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '475px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Maximum Number
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '469px',
                    left: '269px',
                    width: '95px',
                    height: '27px',
                    border: '1px solid lightgray',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <button onClick={handleMaximumDecrement}>-</button>
                <span style={{ margin: '0 10px' }}>{maximumCount}</span>
                <button onClick={handleMaximumIncrement}>+</button>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '526px',
                    left: '24px',
                    fontSize: '14px',
                    color: '#000000',
                    weight: '400'
                }}
            >
                Image
            </div>

            <div
                style={{
                    position: 'absolute',
                    height: '100px',
                    width: '100px',
                    left: '31px',
                    top: '547px',
                    border: '2px solid #DDDDDD',
                    borderRadius: '8px',
                }}
            >
            </div>

            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            <div
                style={{
                    position: 'absolute',
                    height: '100px',
                    width: '100px',
                    left: '31px',
                    top: '547px',
                    border: '2px solid #DDDDDD',
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            >
                {previewURL ? (
                    <img
                        src={previewURL}
                        alt="Preview"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    <Button
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onClick={handleButtonClick}
                    >
                        <CameraAltIcon style={{ fontSize: '44px', color: '#BBBBBB' }} />
                    </Button>
                )}
            </div>


            {/* <div
                style={{
                    position: 'absolute',
                    height: '100px',
                    width: '100px',
                    left: '141px',
                    top: '547px',
                    border: '2px solid #DDDDDD',
                    borderRadius: '8px',
                }}
            >
            </div>

            <div
                style={{
                    position: 'absolute',
                    height: '100px',
                    width: '100px',
                    left: '251px',
                    top: '547px',
                    border: '2px solid #DDDDDD',
                    borderRadius: '8px',
                }}
            >
            </div> */}

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
            >
                Upload
            </Button>
        </div>
    );

}