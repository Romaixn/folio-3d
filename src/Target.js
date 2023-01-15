import { useGLTF } from '@react-three/drei'

export default function Target(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target/model.gltf')
    return <primitive object={scene} {...props} />
}
