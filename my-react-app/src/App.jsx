import { useRef } from 'react'
import {motion} from 'framer-motion'
import './App.css'

function App() {
  const constraintRef = useRef(null)

  return (
    <>
      <motion.section 
      className='square'
      drag
      dragConstraints = {{left: 0, right: 500, top: 5, bottom: 100}}
      ref = {constraintRef}
      >        
        <motion.div 
        className='circle'
        drag
        dragConstraints = {constraintRef}
        ></motion.div>
      </motion.section>
    </>
  )
}

export default App
