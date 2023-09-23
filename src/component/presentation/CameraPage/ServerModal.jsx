import React from "react";
import { Icon } from "@iconify/react";
import '../../../styles/components/CameraPage/serverModal.scss';
import { useTextToSpeech } from "../../../hooks/useTextToSpeech";

const ServerModal = () => {
  const speak = useTextToSpeech();
  return (
    <div className="ServerModal_Container">
      <div className="ServerModal_Wrapper">
        <div className="ServerModal_TextLayOut">
          <div className="ServerModal_Text1">양말을 구분중입니다.</div>
          <div className="ServerModal_Text2"><span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span></div>
          {speak('양말을 구분중입니다.')}
          {speak('잠시만 기다려주세요.')}
        </div>
        <div className="ServerModal_Logo">
          <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
        </div>
      </div>
    </div>
  )
}

export default ServerModal;