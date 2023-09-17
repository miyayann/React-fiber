import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'


const GeoBox = () => {

  const boxRef = useRef()

  useFrame((state, delta, xrFrame) => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })

  return (
    <>
    <ambientLight intensity={0.1} />
      <directionalLight position={[0, 5, 10]} castShadow /> 
    <Box
      ref={boxRef}
      args={[2, 2, 2]}
      scale={1}
      position={[3.0, 5, 1]}
    >
      <meshStandardMaterial color="red"/>
    </Box>
    </>
  )
}

export default GeoBox