import React from 'react';
import LogoImage from '../../../assets/StartPage/Logo.svg';
import '../../../styles/components/StartPage/Logo.scss'

const Logo = () => {
    return (
        <div className='Logo_Container'>
            <div className='Logo_Wrapper'>
                <img src={LogoImage} alt='' />
            </div>
        </div>
    );
};

export default Logo;