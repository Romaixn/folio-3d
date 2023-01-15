import { useGLTF } from '@react-three/drei'

export default function Cookie(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cookie/model.gltf')
    return <primitive object={scene} {...props} />
}
