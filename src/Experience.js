import { Text, ContactShadows, PresentationControls, Float, Environment } from '@react-three/drei'
import Computer from './Computer'

export default function Experience()
{
    return <>
        <color args={['#695b5b']} attach="background"/>

        <Environment preset="city" />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#fecaca'}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <Computer
                    position-y={-1.2}
                />

                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1}
                    position={[2, 0.75, 0.75]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign="center"
                >ROMAIN HERAULT</Text>
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