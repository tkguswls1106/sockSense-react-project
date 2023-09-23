import React from 'react';
import ServerModal from '../../presentation/CameraPage/ServerModal';
import Webcam from "react-webcam";
import Aim from "../../../assets/CameraPage/Aim.svg";
import Heart from "../../../assets/CameraPage/heart.svg";
import Storage from "../../../assets/CameraPage/Storage.svg";
import Shot from "../../../assets/CameraPage/Shot.svg";
import Progress1 from "../../../assets/CameraPage/Progress1.svg";
import Progress2 from "../../../assets/CameraPage/Progress2.svg";
import Progress3 from "../../../assets/CameraPage/Progress3.svg";
import '../../../styles/components/CameraPage/Camera.scss'
import ResultModalContainer from '../../container/CameraPage/ResultModalContainer';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const Camera = ({
    webcamRef, 
    capturePhoto, 
    captures, 
    showServerModal, 
    showResultModal, 
    setShowResultModal,
    navigate,
    result
}) => {
    const speak = useTextToSpeech();
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
                <img src={Storage} alt='Storage' className='Camera_Storage' onClick={()=>navigate('/main')} />
                <img src={Shot} alt='Shot' className='Camera_Shot' onClick={capturePhoto}/>
                {captures.length === 0 && 
                    <>
                        {speak("한쪽 양말을 먼저 촬영해 주세요!")}
                        <div className='Shot_Text'>한쪽 양말을 먼저 촬영해 주세요!</div>
                        <img src={Progress1} alt='Progress1' className='Camera_Progress'/>
                    </>
                }
                {captures.length === 1 && 
                    <>
                        {speak("다른 쪽 양말을 촬영해 주세요!")}
                        <div className='Shot_Text'>다른 쪽 양말을 촬영해 주세요!</div>
                        <img src={Progress2} alt='Progress1' className='Camera_Progress'/>
                    </>
                }
                {showServerModal &&
                    <>
                        <ServerModal />
                        <img src={Progress3} alt='Progress3' className='Camera_Progress'/>
                    </>
                }
                {result !== undefined && showResultModal && <ResultModalContainer result = {result} setShowResultModal={setShowResultModal}/>}
            </div>
        </div>
    );
};

export default Camera;