import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import './App.css'

function App() {
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y :0 
  })

  const [mouseVariant, setMouseVariant] = useState('default')


  useEffect(()=>{
    const mouseMove = (e)=>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    console.log(mousePosition)

    window.addEventListener('mousemove', mouseMove)

    return()=>{
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default:{
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    },
    text:{
      width: 100,
      height: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: 'crimson',
      mixBlendMode: 'difference'
    }
  }

  const textEnter = ()=>{
    setMouseVariant('text')
  }

  const textLeave = ()=>{
    setMouseVariant('default')
  }

  return (
    <>
      <h1 
      className='hero'
      onMouseEnter = {textEnter}
      onMouseLeave = {textLeave}
      >Good evening</h1>      
      <motion.div 
      className='cursor'
      variants = {variants}
      animate = {mouseVariant}
      ></motion.div>
    </>
    
  )
}

export default App
