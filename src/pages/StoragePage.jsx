import React, {useState} from 'react';
import '../styles/components/StoragePage/StoragePage.scss';
import Swiper from 'react-id-swiper';
import Back from '../assets/MainPage/Back.svg'
import Delete from '../assets/StoragePage/Delete.png';
import {useNavigate} from 'react-router-dom'
import Null from '../assets/StoragePage/null.svg'
import RedImg from '../assets/MainPage/Red.png';
import BlackImg from '../assets/MainPage/Black.png';
import BlueImg from '../assets/MainPage/Blue.png';
import GrayImg from '../assets/MainPage/Gray.png';
import GreenImg from '../assets/MainPage/Green.png';
import OrangeImg from '../assets/MainPage/Orange.png';
import PurpleImg from '../assets/MainPage/Purple.png';
import WhiteImg from '../assets/MainPage/White.png';
import YellowImg from '../assets/MainPage/Yellow.png';
import '../../node_modules/swiper/swiper.scss';

const imgDatas = [
    {
        color : '빨강',
        imgUrl : RedImg
    },
    {
        color : '주황',
        imgUrl : OrangeImg
    },
    {
        color : '노랑',
        imgUrl : YellowImg
    },
    {
        color : '초록',
        imgUrl : GreenImg
    },
    {
        color : '파랑',
        imgUrl : BlueImg
    },
    {
        color : '보라',
        imgUrl : PurpleImg
    },
    {
        color : '검정',
        imgUrl : BlackImg
    },
    {
        color : '회색',
        imgUrl : GrayImg
    },    
    {
        color : '흰색',
        imgUrl : WhiteImg
    },

]

const StoragePage = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const codyDatas = [];
    const codyKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    
        try {
            const data = JSON.parse(value);
            if (data.sockColor) { 
                // Find the corresponding image URL and add it to the data object
                const matchingImgData = imgDatas.find(imgData => imgData.color === data.sockColor);
                if (matchingImgData) {
                    data.imgUrl = matchingImgData.imgUrl;
                }

                codyKeys.push(key);
                codyDatas.push(data);
            }
        } catch (error) {
            console.error(`The value for "${key}" is not valid JSON.`);
        }
    }
    
    console.log(codyDatas, codyKeys);

    const handleDelete = () => {
        // Remove from localStorage
        localStorage.removeItem(codyKeys[activeIndex]);
    
        // Remove from codyDatas and codyKeys arrays
        codyDatas.splice(activeIndex, 1);
        codyKeys.splice(activeIndex, 1);
    
        // If the active index is now out of bounds, reset it to the last item
        if (activeIndex >= codyDatas.length) {
            setActiveIndex(Math.max(codyDatas.length - 1, 0));
        } else {
            setActiveIndex(activeIndex);
        }
    };
    
    

    const params = {
        on: {
            slideChange: (swiper) => {
                setActiveIndex(swiper.activeIndex);
            },
        },
        spaceBetween: 110,
        slidesPerView: 2,
        centeredSlides: true,
        roundLengths: true,
        loop: false,
     }
      
    return (
        <div className='StoragePage_Container'>
            {localStorage.length === 0 ? 
                <div className='StoragePage_Null'>
                    <img src={Back} alt='' onClick={()=>navigate('/main')} className='Storage_NullBack_img'/>
                    <div className='StoragePage_NullBox'>
                        <img src={Null} alt='' className='StoragePage_NullIcon'/>
                        <div className='StoragePage_NullText1'>저장한 코디가 없어요!</div>
                        <div className='StoragePage_NullText2'>최대 5개까지 저장할 수 있어요</div>
                        <button className='StoragePage_NullBtn' onClick={()=>navigate('/main')}>코디 추천받기</button>
                    </div>
                </div> :
                <div className='StoragePage_Wrapper'>
                    <img src={Back} alt='' onClick={()=>navigate('/main')} className='Storage_Back_img'/>
                    <img src={Delete} alt='' onClick={handleDelete} className='Storage_Delete_img'/>
                    <Swiper {...params} key={codyDatas.length}>
                        {codyDatas.map((data, index) => (
                            <div key={index}>
                                <img src={data.imgUrl} alt='' />
                            </div>
                        ))}
                    </Swiper>
                    <div className='Storage_Cody_Information_Text'>내가 저장한 코디</div>
                    <div className='Storage_Cody_Information_Layout'>
                        <div className='Storage_Cody_Information'>
                            <div className='Storage_Cody_Information_Detail'>
                                <div className='Storage_Cody_Information_Detail_Category'>상의</div>
                                <div className='Storage_Cody_Information_Detail_Text'>{codyDatas[activeIndex]?.stylings[0]?.top}</div>
                            </div>
                            <div className='Storage_Cody_Information_Detail' style={{borderLeft : '1px solid lightgray', borderRight : '1px solid lightgray'}}>
                                <div className='Storage_Cody_Information_Detail_Category'>하의</div>
                                <div className='Storage_Cody_Information_Detail_Text'>{codyDatas[activeIndex]?.stylings[0]?.pants}</div>
                            </div>
                            <div className='Storage_Cody_Information_Detail'>
                                <div className='Storage_Cody_Information_Detail_Category'>신발</div>
                                <div className='Storage_Cody_Information_Detail_Text'>{codyDatas[activeIndex]?.stylings[0]?.shoes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default StoragePage;