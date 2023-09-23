import React, {useState} from 'react';
import SelectGender from '../../presentation/MainPage/SelectGender';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postFashion } from '../../../api/postFashion';
import ServerMdoal from '../../presentation/MainPage/ServerModal'

const SelectGenderContainer = ({gender, setGender, setResult, captures}) => {
    const navigate = useNavigate();
    const [isActive, setActive] = useState(true);

    const uploadData = useMutation(postFashion, {
        onSuccess: (data) => {
            setResult(data.data);
            console.log(data.data);
            navigate('/main/cody');
          },
          onError: (err) => {
            setResult(
                {
                    sockColor : "노랑",
                    stylings : [{top: '블랙 티셔츠', pants: '청바지', shoes: '흰색 스니커즈'},
                                {top: '연베이지 니트', pants: '블랙 와이드 팬츠', shoes: '갈색 부츠'}]
                }
            )
            navigate('/main/cody');
          },
    })

    const onClick = () => {
        if(gender === undefined){
            alert('성별을 선택해주세요!')
        } else {
            const arr = [captures[0], gender];
            console.log(arr);
            uploadData.mutate(arr);
        }
    }

    if (uploadData.isLoading) {
        return <ServerMdoal/>;
    }

    return (
        <SelectGender 
            gender={gender}
            setGender={setGender}
            onClick={onClick}
            isActive={isActive}
        />
    );
};

export default SelectGenderContainer;