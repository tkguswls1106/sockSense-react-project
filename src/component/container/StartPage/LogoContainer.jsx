import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../presentation/StartPage/Logo';

const LogoContainer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/camera');
        }, 5000); // 5초 후에 페이지 이동

        return () => clearTimeout(timer); // 컴포넌트 unmount 시 타이머 해제
    }, [navigate]);

    return (
        <Logo/>
    );
};

export default LogoContainer;