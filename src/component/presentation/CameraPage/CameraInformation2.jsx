import React from 'react';
import Heart from "../../../assets/CameraPage/heart.svg";
import Storage from "../../../assets/CameraPage/Storage.svg";
import '../../../styles/components/CameraPage/CameraInformation2.scss';
import '../../../styles/components/CameraPage/Camera.scss'
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const CameraInformation2 = ({isOpen, setIsOpen}) => {
    const speak = useTextToSpeech();
    const onClick = () => {
        let newState = [false, false]
        setIsOpen(newState);
    }
    return (
        <div className='Inf2_Container' onClick={onClick}>
            <div className='Inf2_Wrapper'>
                <div className='Inf2_TextBox1'>
                    <div>상단 우측 버튼으로</div>
                    <div style={{color : '#DDFD5C'}}>저장한 코디를 확인할 수 있어요!</div>
                </div>
                <div className='Inf2_TextBox2'>
                    <div>하단 좌측 버튼으로</div>
                    <div style={{color : '#DDFD5C'}}>코디를 추천받을 수 있어요!</div>
                </div>
                <img src={Heart} alt='Heart' className='Camera_Heart' />
                <img src={Storage} alt='Storage' className='Camera_Storage' />
            </div>
            {speak('상단 우측 버튼으로 저장한 코디를 확인할 수 있어요!')}
            {speak('하단 좌측 버튼으로 코디를 추천받을 수 있어요!')}
        </div>
    );
};

export default CameraInformation2;