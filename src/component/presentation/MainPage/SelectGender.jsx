import React from 'react';
import '../../../styles/components/MainPage/SelectGender.scss';
import Progress2 from '../../../assets/MainPage/Progress2.png'
import Man from '../../../assets/MainPage/Man.png'
import Woman from '../../../assets/MainPage/Woman.png'
import ActiveMan from '../../../assets/MainPage/ActiveMan.png'
import ActiveWoman from '../../../assets/MainPage/ActiveWoman.png'
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const SelectGender = ({gender, setGender, onClick}) => {
    const speak = useTextToSpeech();
    return (
        <div className='SelectGender_Container'>
            <div className='SelectGender_Wrapper'>
                <img src={Progress2} alt='Progress' className='SelectGender_Progress'/>
                <div className='SelectGender_TextBox_LayOut'>
                    <div className='SelectGender_TextBox1'>성별이 어떻게 되시나요?</div>
                    <div className='SelectGender_TextBox2'>성별에 맞춰 코디를 알려드립니다!</div>
                    {speak('성별이 어떻게 되시나요? 성별에 맞춰 코디를 알려드립니다!')}
                </div>
                <div className='SelectGender_SelectLayOut'>
                    {gender === '남성' ? <img src={ActiveMan} alt='' onClick={()=>setGender()}/> : <img src={Man} alt='' onClick={()=>setGender('남성')}/>}
                    {gender === '여성' ? <img src={ActiveWoman} alt='' onClick={()=>setGender()}/> : <img src={Woman} alt='' onClick={()=>setGender('여성')}/>}
                </div>
                <button className='SelectGender_Btn' onClick={onClick}>다음</button>
            </div>
        </div>
    );
};

export default SelectGender;