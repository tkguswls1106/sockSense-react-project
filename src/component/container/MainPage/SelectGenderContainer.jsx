import React from 'react';
import SelectGender from '../../presentation/MainPage/SelectGender';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postFashion } from '../../../api/postFashion';
import ServerMdoal from '../../presentation/MainPage/ServerModal'

const SelectGenderContainer = ({gender, setGender, setResult, captures}) => {
    const navigate = useNavigate();

    const uploadData = useMutation(postFashion, {
        onSuccess: (data) => {
            setResult(data.data);
            console.log(data.data);
            navigate('/main/cody');
          },
          onError: (err) => {
            alert('잠시후 시도해 주세요!');
            console.error(err);
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
        />
    );
};

export default SelectGenderContainer;