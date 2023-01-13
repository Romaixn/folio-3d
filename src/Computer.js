import { Html, useGLTF } from '@react-three/drei'

export default function Computer(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return <primitive object={scene} {...props}>
        <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
        ><iframe src="https://rherault.fr"/></Html>
    </primitive>
}
