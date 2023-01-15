import { useGLTF } from '@react-three/drei'

export default function Star(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf')
    return <primitive object={scene} {...props} />
}
