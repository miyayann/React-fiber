import { Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const GeoText3d = () => {

  const Text3Ref = useRef()

  useFrame((state, delta, xrFrame) => {
    Text3Ref.current.rotation.x += 0.02
  })
  return (
    <Text3D
    ref={Text3Ref}
      position={[-2, 0, 0]}
      font="/Regular.json"
      height={0.05}
      lineHeight={0.6}
      bevelEnabled
      bevelSize={0.05}
      bevelThickness={0.01}
    >
      {`Creative\nWorld`}
      <meshNormalMaterial color="blue"  />
    </Text3D>
  )
}

export default GeoText3d