  import React from 'react';
  import { Canvas } from '@react-three/fiber';
  import { OrbitControls } from '@react-three/drei';
  import KanavAdd from './kanavadd';
  import "./style.css";
  import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

  const App = () => {
    return (
      <>
      <Canvas flat camera={{fov:35}}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <KanavAdd />
        <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={7.0} // The bloom intensity.
        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptive />
        </EffectComposer>

      </Canvas>
      <div className="h-screen bg-black flex items-center justify-center py-32">
        <h1 className="text-white">Welcome to My Portfolio.</h1>
      </div>

      </>
    );
  };

  export default App;
