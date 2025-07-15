import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Components/Loader";
import Island from "../pages/models/Island";
import Sky from "../pages/models/Sky";
import Bird from "../pages/models/Bird";
import Plane from "../pages/models/Plane";
import HomeInfo from "./Components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.9;
  audioRef.current.loop = true;
  

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return()=>{
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -3.10, -50.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <div className="w-full h-screen relative ">
      <div className="absolute top-8 left-0 right-0 z-10 flex justify-center items-center m-auto 0 ">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grab" : "curser-grabbing"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[2, 7, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            intensity={2}
            angle={0.15}
            penumbra={1}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            screenScale={islandScale}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            setCurrentStage={setCurrentStage}
            className="relative "
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
            scale={planeScale}
            position={planePosition}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-15 left-10 ">
        <img src={ !isPlayingMusic?soundoff:soundon}alt="Jukebox" onClick={() => setIsPlayingMusic(!isPlayingMusic)} className="w-15 h-15 object-contain cursor-pointer jukebox" />
      </div>
    </div>
  );
};

export default Home;
