import { useGLTF } from '@react-three/drei'

export default function Dog(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf')
    return <primitive object={scene} {...props} />
}
