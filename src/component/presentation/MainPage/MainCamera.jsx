import React from 'react';
import Webcam from "react-webcam";
import Aim from "../../../assets/CameraPage/Aim.svg";
import Shot from "../../../assets/CameraPage/Shot.svg";
import '../../../styles/components/CameraPage/Camera.scss'
import Heart from "../../../assets/CameraPage/heart.svg";

const MainCamera = ({navigate, webcamRef, capturePhoto}) => {
    
    return (
        <div className='Camera_Container'>
            <div className='Camera_Wrapper'>
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints = {{
                        facingMode: "environment",
                        focusMode: "continuous"
                    }}
                    ref={webcamRef}
                    className='Camera_Layout'
                />
                <img src={Aim} alt='aim' className='Camera_Aim' />
                <img src={Heart} alt='Heart' className='Camera_Heart' onClick={()=>navigate('/storage')}/>
                <img src={Shot} alt='Shot' className='Camera_Shot' onClick={capturePhoto}/>
            </div>
        </div>
    );
};

export default MainCamera;