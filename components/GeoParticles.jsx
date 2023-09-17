import { Point, PointMaterial, Points } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { MathUtils } from "three"


const pColors = ['red', 'yellow', 'orange', 'blue', 'green', 'white']

const GeoParticles = ({count = 10000}) => {
    return (
      <Points limit={count}>
        <PointMaterial size={0.04} vertexColors/>
        {Array.from({length: count}).map((_,i) => (
          <Point 
            key={i}
            position={[
              (0.5 - Math.random()) * 10 * 2,
              (0.5 - Math.random()) * 10,
              (0.5 - Math.random()) * 50,
            ]}
            color={pColors[Math.floor(Math.random() * (pColors.length - 1))]}
          />
        )) }
      </Points>
    )
}








export default GeoParticles
