import { Suspense, useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Loader } from '@react-three/drei'

export default function App() {
    return (
        <>
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [ -3, 1.5, 4 ]
                } }
            >
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}
