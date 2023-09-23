import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResultSockColor from '../../presentation/MainPage/ResultSockColor';

const ResultSockColorContainer = () => {
    const navigate = useNavigate();
    return (
        <ResultSockColor navigate={navigate} />
    );
};

export default ResultSockColorContainer;