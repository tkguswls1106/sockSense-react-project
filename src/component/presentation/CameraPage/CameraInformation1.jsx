import React from 'react';
import '../../../styles/components/CameraPage/CameraInformation1.scss';
import '../../../styles/components/CameraPage/Camera.scss'
import Shot from "../../../assets/CameraPage/Shot.svg";
import Progress1 from "../../../assets/CameraPage/Progress1.svg";

const CameraInformation1 = ({isOpen, setIsOpen}) => {
    const onClick = () => {
        let newState = [false, true]
        setIsOpen(newState);
    }
    return (
        <div className='Inf1_Container' onClick={onClick}>
            <div className='Inf1_Wrapper'>
                <div className='Inf1_TextBox'>
                    <div className='Inf1_Text1'>
                        <div>양말 구분은 </div>
                        <div><span style={{color : '#DDFD5C'}}>총 3가지 단계</span>로 진행됩니다.</div>
                    </div>
                    <div className='Inf1_Text2'>
                        <div>한쪽 양말을 먼저 촬영 후</div>
                        <div style={{marginTop : '73px'}}>다른 양말도 마저 촬영합니다.</div>
                        <div style={{marginTop : '71px'}}>결과를 확인하면 끝!</div>
                        <div style={{
                            fontSize: '12px',
                            marginTop : '73px'
                        }}>아래의 버튼으로 <span style={{color : '#DDFD5C'}}>촬영</span>할 수 있어요!</div>
                    </div>
                </div>
                <img src={Shot} alt='Shot' className='Camera_Shot'/>
                <img src={Progress1} alt='Progress1' className='Camera_Progress'/>
            </div>
        </div>
    );
};

export default CameraInformation1;