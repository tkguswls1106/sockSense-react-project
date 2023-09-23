import React from 'react';
import '../../../styles/components/MainPage/ResultSockColor.scss';
import Progress1 from '../../../assets/MainPage/Progress1.png'
import White from '../../../assets/MainPage/White.png'
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const ResultSockColor = ({navigate}) => {
    const speak = useTextToSpeech();
    return (
        <div className='ResultSockColor_Container'>
            <div className='ResultSockColor_Wrapper'>
                <img src={Progress1} alt='Progress' className='ResultSockColor_Progress'/>
                <div className='ResultSockColor_TextBox_LayOut'>
                    <div className='ResultSockColor_TextBox1'>촬영을 완료하셨군요!</div>
                    <div className='ResultSockColor_TextBox2'>화면 하단의 버튼을 이용해 시작하세요!</div>
                    {speak('촬영을 완료하셨군요! 화면 하단의 버튼을 이용해 시작하세요!')}
                </div>
                <img src={White} alt='Progress' className='ResultSockColor_ResultImg'/>
                <button className='ResultSockColor_Btn' onClick = {()=>navigate('/main/gender')}>시작하기</button>
            </div>
        </div>
    );
};

export default ResultSockColor;