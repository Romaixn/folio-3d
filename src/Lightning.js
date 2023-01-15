import { useGLTF } from '@react-three/drei'

export default function Lightning(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lightning/model.gltf')
    return <primitive object={scene} {...props} />
}
