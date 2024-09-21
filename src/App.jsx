import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mac from './Mac'
import { FaApple } from 'react-icons/fa'

function App() {
  return (
    <>
      <div className='main w-full h-screen'>
        
        <nav className='absolute text-white tracking-tighter top-0 -translate-x-1/2 left-1/2 flex gap-20 p-10 items-center'>
          <FaApple />
          {["Store" , "Mac", "iPhone" , "iPad" , "Watch" ,"Entertainment" , "Accessories"].map((key , index)=> {
            return (
                <a key={index}>{key}</a>
            )
          })}
        </nav>
        
        <div className='absolute text-white text-7xl tracking-tighter font-700 top-44 -translate-x-1/2 left-1/2'>
          <h1 className="masked-text" style={{ fontFamily: 'Helvetica, sans-serif' }}>Macbook Pro!</h1>
        </div>

        <Canvas camera={{ fov: 12, position: [0, 0, 220] }}>

          <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />

          <ScrollControls>
            <Mac />
          </ScrollControls>

        </Canvas>

      </div>

      <div className="screen-mob text-white font-500 text-5xl text-center w-full h-screen flex items-center justify-center p-10">
        <p>Please Use Big Screen for better Experience</p>
      </div>
    </>
  )
}

export default App