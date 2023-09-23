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
            alert('잠시후 시도해 주세요! 버튼이 30초간 비활성화 합니다.');
            console.error(err);
            setActive(false);
            setInterval(()=> {
                setActive(true);
            }, 30000)
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