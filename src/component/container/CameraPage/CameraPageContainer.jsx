import React, {useState} from 'react';
import CameraPage from '../../../pages/CameraPage';

const CameraPageContainer = () => {
    const [isOpen, setIsOpen] = useState([true, false]);
    const [step, setStep] = useState(true);

    return (
        <CameraPage
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            step={step}
            setStep={setStep}
        />
    );
};

export default CameraPageContainer;