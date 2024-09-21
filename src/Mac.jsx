import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from "three";

function Mac() {
    let macModel = useGLTF("./mac.glb");
    let texturebg = useTexture("./bg.webp")
    let meshes = {}

    macModel.scene.traverse((e) => {
        meshes[e.name] = e;
    })

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texturebg;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metelness = 0;
    meshes.matte.material.roughness = 1;

    let data = useScroll();

    useFrame((state , delta)=> {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90 );
    });

    return (
        <group position={[0, -8, 20]}>
            <primitive object={macModel.scene}></primitive>
        </group>
    )
}

export default Mac