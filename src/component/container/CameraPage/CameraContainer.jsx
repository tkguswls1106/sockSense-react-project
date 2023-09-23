import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from '../../presentation/CameraPage/Camera';
import { uploadPhotos } from '../../../api/postPair';
import { useMutation } from 'react-query';
import ServerModal from '../../presentation/CameraPage/ServerModal';
import { useTextToSpeech } from '../../../hooks/useTextToSpeech';

const CameraContainer = () => {
    const [captures, setCaptures] = useState([]);
    const [showServerModal, setShowServerModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    const [result, setResult] = useState();
    const navigate = useNavigate();
    const speak = useTextToSpeech();
    const uploadMutation = useMutation(uploadPhotos, {
        onSuccess: (data) => {
          setResult(data.data.result);
        },
        onError: (err) => {
            speak('잠시후 시도해 주세요!')
            alert('잠시후 시도해 주세요!');
            console.error(err);
            setInterval(() => {
                window.location.reload();
            }, 3000)
          },
      });


    const webcamRef = React.useRef(null);
    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        fetch(imageSrc)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], "image.jpeg", { type: "image/jpeg" });
            setCaptures(prevState => [...prevState, file]);
          });
      };  

    useEffect(() => {
        let serverTimer, resultTimer;
        if (captures.length === 2) {
            setShowServerModal(true);
            serverTimer = setTimeout(() => {
                setShowServerModal(false);
                setShowResultModal(true); // Show ResultModal right after ServerModal disappears
            }, 3000);
            uploadMutation.mutate(captures);

        }
        return () => { 
            clearTimeout(serverTimer); 
            clearTimeout(resultTimer); // Clear both timers if the component unmounts
        };
    }, [captures]);

    if(uploadMutation.isLoading) {
        return <ServerModal />
    }

    return (
        <Camera 
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
            showResultModal={showResultModal}
            setShowResultModal={setShowResultModal}  
            navigate={navigate}
            result={result}
        />
    );
};

export default CameraContainer;