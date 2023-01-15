import { useGLTF } from '@react-three/drei'

export default function Heart(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf')
    return <primitive object={scene} {...props} />
}
