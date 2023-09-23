import React from 'react';
import ResultModal from '../../presentation/CameraPage/ResultModal';
import { useNavigate } from 'react-router-dom';

const ResultModalContainer = ({ result, setShowResultModal }) => {
  const navigate = useNavigate();
    const handleRestartCamera = () => {
        window.location.reload();
      };
    
      const handleCloseModal = () => {
        setShowResultModal(false);
        navigate('/')
      }
    return (
        <ResultModal
            result={result}
            handleCloseModal={handleCloseModal}
            handleRestartCamera={handleRestartCamera}
        />
    );
};

export default ResultModalContainer;