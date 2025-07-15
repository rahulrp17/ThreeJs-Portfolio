import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import planeScene from "../../assets/3d/Plane.glb";
const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {

    const take001=actions["Take 001"];
   
    if(take001){ 
      if (isRotating) {

       take001.play();
      } else {
        take001.stop();
      }
    }else{
      console.log("no animation")
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
