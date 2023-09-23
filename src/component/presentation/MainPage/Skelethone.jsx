import React from 'react';
import '../../../styles/components/MainPage/Skelethone.scss'

const Skelethone = () => {
    return (
        <div className='Skelethone_Container'>
            <div className='Skelethone_Wrapper'>
                <div className='Skelethone_HorizonBar'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <div className='Skelethone_Box_Collection'>
                    <div className='Skelethone_Box' style={{width : '100%', height : '68px'}}></div>
                    <div className='Skelethone_Box' style={{width : '241px', height : '24px', borderRadius : '8px'}}></div>
                </div>
                <div className='Skelethone_Bottom_Box' style={{width: '350px', height: '50px'}}></div>
            </div>
        </div>
    );
};

export default Skelethone;