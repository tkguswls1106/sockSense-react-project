import React from "react";
import { Icon } from "@iconify/react";
import '../../../styles/components/MainPage/MainserverModal.scss';
import { useTextToSpeech } from "../../../hooks/useTextToSpeech";


const ServerModal = () => {
  const speak = useTextToSpeech();
  return (
    <div className="MainServerModal_Container">
      <div className="MainServerModal_Wrapper">
        <div className="MainServerModal_TextLayOut">
          <div className="MainServerModal_Text1">맞춤 코디를 구성중입니다.</div>
          <div className="MainServerModal_Text2"><span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span></div>
          {speak('맞춤 코디를 구성중입니다. 잠시만 기다려주세요.')}
        </div>
        <div className="MainServerModal_Logo">
          <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
        </div>
      </div>
    </div>
  )
}

export default ServerModal;