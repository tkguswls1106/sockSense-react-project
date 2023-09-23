import React, {Suspense, lazy, useState, useEffect} from 'react';
import { useRoutes } from 'react-router-dom';
import Skelethone from '../component/presentation/MainPage/Skelethone';
const StartRenderingContainer = lazy(() => import("../component/container/common/StartRenderingContainer"));
const MainCameraContainer = lazy(() => import('../component/container/MainPage/MainCameraContainer'));
const ResultSockColorContainer = lazy(() => import('../component/container/MainPage/ResultSockColorContainer'));
const SelectGenderContainer = lazy(() => import('../component/container/MainPage/SelectGenderContainer'));
const Cody = lazy(() => import('../component/presentation/MainPage/Cody'));

export default function MainPage({
  gender,
  setGender,
  setShowServerModal,
  result,
  navigate,
  showServerModal,
  setResult
}) {
  const [captures, setCaptures] = useState([]);
  const webcamRef = React.useRef(null);
  const capturePhoto = () => {
      let serverTimer;
      const imageSrc = webcamRef.current.getScreenshot();
      fetch(imageSrc)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "image.jpeg", { type: "image/jpeg" });
          setCaptures(prevState => [...prevState, file]);
        });
        serverTimer = setTimeout(() => {
          navigate('/main/gender')
          }, 1500);
      return () => { 
          clearTimeout(serverTimer); 
      };
    };  

  let element = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Skelethone/>}>
          <StartRenderingContainer type={1}/>
        </Suspense>
      ),
    },
    {
      path: 'shot',
      element: (
        <Suspense fallback={<></>}>
          <MainCameraContainer 
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
          />
        </Suspense>
      ),
    },
    {
      path: 'color',
      element: (
        <Suspense fallback={<></>}>
          <ResultSockColorContainer />
        </Suspense>
      ),
    },
    {
      path: 'gender',
      element: (
        <Suspense fallback={<></>}>
          <SelectGenderContainer
            gender={gender}
            setGender={setGender}
            setResult={setResult}
            captures={captures}
            showServerModal={showServerModal}
          />
        </Suspense>
      ),
    },
    {
      path: 'cody',
      element: (
        <Suspense fallback={<></>}>
          <Cody
            result={result}
          />
        </Suspense>
      ),
    },
  ]);

  return element;
}
