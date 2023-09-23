import React, { Suspense, lazy } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

const StartPage = lazy(() => import("./pages/StartPage"));
const MainPageContainer = lazy(() => import("./component/container/MainPage/MainPageContainer"));
const CameraPage = lazy(() => import("./component/container/CameraPage/CameraPageContainer"));
const StoragePage = lazy(() => import("./pages/StoragePage"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/camera' element={<CameraPage />} />
            <Route path='/main/*' element={<MainPageContainer />}/>
            <Route path='/storage' element={<StoragePage />} />
          </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
