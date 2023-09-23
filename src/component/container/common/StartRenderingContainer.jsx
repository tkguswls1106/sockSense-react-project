import React from 'react';
import { useNavigate } from 'react-router-dom';
import { datas } from '../../container/common/data';
import StartRendering from '../../presentation/common/StartRendering';

const StartRenderingContainer = ({type, step, setStep}) => {

    const navigate = useNavigate();
    const onBtnClick = () => {
        type === 0 && setStep(false);
        navigate(datas[type].link)
    }
    return (
        <StartRendering datas={datas} onBtnClick={onBtnClick} step={step} type={type} navigate={navigate}/>
    );
};

export default StartRenderingContainer;