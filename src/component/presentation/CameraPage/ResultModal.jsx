import React from "react";
import "../../../styles/components/CameraPage/resultModal.scss";
import xicon from "../../../assets/CameraPage/xicon.jpeg"
import oicon from "../../../assets/CameraPage/oicon.jpeg"
import { useTextToSpeech } from "../../../hooks/useTextToSpeech";

const ResultModal = ({ result, handleCloseModal, handleRestartCamera }) => {
  const speak = useTextToSpeech();

  if (result === 0) {
    return (
      <div className="modalContainer">
        <div className="resultModal">
          <img className="resultIcon" src={xicon} alt="짝이 아닙니다." />
          <h2 className="resultText">짝이 아닙니다!</h2>
          {speak("짝이 아닙니다!")}
          <button className="resultBtn" onClick={handleRestartCamera}>
            다시 촬영하기
          </button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="modalContainer">
        <div className="resultModal">
          <img className="resultIcon" src={oicon} alt="짝이 맞습니다." />
          <h2 className="resultText">짝이 맞습니다!</h2>
          {speak("짝이 맞습니다!")}
          <button className="resultBtn" onClick={handleCloseModal} >
            종료하기
          </button>
        </div>
      </div>
    );
  }
};

export default ResultModal;
