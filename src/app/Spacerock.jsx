import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export default forwardRef((props, ref) => {
  const { nodes } = useGLTF("../public/models/spacerock-transformed.glb");
  return (
    <mesh
      ref={ref}
      {...props}
      dispose={null}
      geometry={nodes.spacerock.geometry}
    >
      {props.children}
    </mesh>
  );
});

const spacerockGeometry = () => {
  const { nodes } = useGLTF("/models/spacerock-transformed.glb");
  return nodes.spacerock.geometry;
};

useGLTF.preload("/models/spacerock-transformed.glb");

export { spacerockGeometry };
