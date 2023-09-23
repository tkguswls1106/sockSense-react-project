import React from 'react';
import CameraInformation1 from '../component/presentation/CameraPage/CameraInformation1';
import CameraInformation2 from '../component/presentation/CameraPage/CameraInformation2';
import CameraContainer from '../component/container/CameraPage/CameraContainer';
import StartRenderingContainer from '../component/container/common/StartRenderingContainer';

const CameraPage = ({isOpen, setIsOpen, step, setStep}) => {
    return (
        <>
            {   step === true ? <StartRenderingContainer type={0} step={step} setStep={setStep}/> :
                <>
                    {isOpen[0] && <CameraInformation1 isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    {isOpen[1] && <CameraInformation2 isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    <CameraContainer />
                </>
            }
        </>
    );
};

export default CameraPage;