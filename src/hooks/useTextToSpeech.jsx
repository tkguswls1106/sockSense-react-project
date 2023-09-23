export const useTextToSpeech = () => {
    return (text) => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.repeat = 0; // Repeat twice
        window.speechSynthesis.speak(msg);
    };
};
