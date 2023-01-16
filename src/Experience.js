import { Text, ContactShadows, PresentationControls, Float, Environment } from '@react-three/drei'
import Computer from './Computer'
import Mobile from './Mobile'
import Target from './Target'
import Lightning from './Lightning'
import { useState, useEffect } from 'react'

export default function Experience()
{
    const [width, setWidth] = useState(window.innerWidth)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const isMobile = width <= 768

    return <>
        <color args={['#695b5b']} attach="background"/>

        <Environment preset="city" />

        <PresentationControls
            global
            rotation={isMobile ? [-0.13, 0, 0] : [0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float>
                <Target
                    position={isMobile ? [2, 1, -1] : [4, 1, -1]}
                    rotation={[0, -0.5, 0]}
                />
            </Float>

            <Float>
                <Lightning
                    position={isMobile ? [-0.5, 0, -0.6] : [-1.5, 1.2, -2]}
                />
            </Float>

            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#fecaca'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                {isMobile
                    ? <Mobile position-y={-1.2} />
                    : <Computer position-y={-1.2} />
                }

                {!isMobile &&
                    <Text
                        font="./bangers-v20-latin-regular.woff"
                        fontSize={1}
                        position={[2, 0.5, 0]}
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign="center"
                        castShadow={false}
                    >ROMAIN HERAULT</Text>
                }
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
}
