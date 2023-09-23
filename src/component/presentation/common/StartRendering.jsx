import React from 'react';
import Back from '../../../assets/MainPage/Back.svg';
import '../../../styles/components/common/StartRendering.scss'
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const StartRendering = ({onBtnClick, type, datas, navigate}) => {
    const speak = useTextToSpeech();
    return (
        <div className='StartRendering_Container'>
            <div className='StartRendering_Wrapper'>
                {type === 1 && <img src={Back} alt='' className='StartRendering_Back' onClick={()=>navigate(-1)}/>}
                <div className='StartRendering_TextBox_LayOut' style={type === 1 ? {marginTop : '22px'} : {marginTop : '82px'}}>
                    <div className='StartRendering_TextBox1'>{datas[type].content1}</div>
                    <div className='StartRendering_TextBox2'>{datas[type].content2}</div>
                    {speak(`${datas[type].content1}`)}
                    {speak(`${datas[type].content2}`)}

                </div>
                {datas[type].imgUrl ? <img src={datas[type].imgUrl} alt='' className='StartRendering_Img'/> : <div className='StartRendering_Img_Undefined'></div>}
                <button className='StartRendering_Btn' onClick={onBtnClick}>촬영하기</button>
            </div>
        </div>
    );
};

export default StartRendering;