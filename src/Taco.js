import { useGLTF } from '@react-three/drei'

export default function Taco(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/taco/model.gltf')
    return <primitive object={scene} {...props} />
}
