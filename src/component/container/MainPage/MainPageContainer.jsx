import React, {useState} from 'react';
import MainPage from '../../../pages/MainPage';
import { useNavigate } from 'react-router-dom';

const MainPageContainer = () => {
    const [gender, setGender] = useState();
    const [showServerModal, setShowServerModal] = useState(false);
    const [result, setResult] = useState();
    const navigate = useNavigate();

    return (
        <MainPage
            gender={gender}
            setGender={setGender}
            setShowServerModal={setShowServerModal}
            result={result}
            navigate={navigate}
            showServerModal={showServerModal}
            setResult={setResult}
        />
    );
};

export default MainPageContainer;