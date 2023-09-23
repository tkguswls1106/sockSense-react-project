import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCamera from '../../presentation/MainPage/MainCamera';

const MainCameraContainer = ({webcamRef, capturePhoto, captures, showServerModal}) => {
    const navigate = useNavigate();

    return (
        <MainCamera 
            navigate={navigate}
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
        />
    );
};

export default MainCameraContainer;