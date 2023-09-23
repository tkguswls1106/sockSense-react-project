import React, {useState} from 'react';
import '../../../styles/components/MainPage/Cody.scss'
import Progress3 from '../../../assets/MainPage/Progress3.png'
import Top from '../../../assets/MainPage/Top.png'
import Pant from '../../../assets/MainPage/Pants.png'
import Shoe from '../../../assets/MainPage/Shoe.png'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const Cody = ({result}) => {

    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // 새로운 상태 변수 추가
    const handleSaveResult = () => {
        if (isSaved === false) {
          const key = uuidv4();
          // Check if the key is not one of the unwanted ones
          if (!['iconify-count', 'iconify0', 'iconify-version'].includes(key) && !localStorage.getItem(`${key}`)) {
            localStorage.setItem(`${key}`, JSON.stringify(result));
            setIsSaved(true);
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        }
    };
    localStorage.removeItem('iconify-count');
    localStorage.removeItem('iconify0');
    localStorage.removeItem('iconify-version');
    
    console.log(localStorage.length)

    const speak = useTextToSpeech();

    return (
        <div className='Cody_Container'>
            <div className='Cody_Wrapper'>
                <img src={Progress3} alt='Progress' className='SelectGender_Progress'/>
                <div className='Cody_TextBox_LayOut'>
                    <div className='Cody_TextBox1'>코디를 추천해드릴게요!</div>
                    <div className='Cody_TextBox2'>{result.sockColor}양말에 어울리는 상의, 하의, 신발입니다.</div>
                    {speak(`코디를 추천해드릴게요! ${result.sockColor}양말에 어울리는 상의, 하의, 신발입니다.`)}
                </div>
                <div className='Cody_Recommend_LayOut'>
                    <div className='Cody_Recommend_Box'>
                        <img src={Top} alt='' />
                        {result.stylings[0].top}
                    </div>
                    <div className='Cody_Recommend_Box'>
                        <img src={Pant} alt='' />
                        {result.stylings[0].pants}
                    </div>
                    <div className='Cody_Recommend_Box'>
                        <img src={Shoe} alt='' />
                        {result.stylings[0].shoes}
                    </div>
                    {speak(`상의는 ${result.stylings[0].top}, 하의는 ${result.stylings[0].pants}, 신발은 ${result.stylings[0].shoes}`)}
                </div>
                <div className='Cody_Recommend_Btn_Layout'>
                    <button className='Cody_Recommend_Btn1' onClick = {()=>navigate('/storage')}>종료하기</button>
                    <button className='Cody_Recommend_Btn2'  disabled={isSaved} onClick = {handleSaveResult}>저장하기</button>
                </div>

                {showAlert && 
                 ((localStorage.length < 6) ? 
                    <div className='Cody_Alert'>양말 코디를 저장했어요!</div> 
                    : 
                    <div className='Cody_Alert'>최대 5개의 코디까지 저장할 수 있습니다.</div>)
                }
            </div>
        </div>
    );
};

export default Cody;