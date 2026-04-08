import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css' 
import Homepage from './component/Homepage'
import Article from './component/article'
import Menu from './component/Menu'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
    <Homepage/>
    <Menu count={count} setCount={setCount}/> 
    <Article />
      
    </>
  )
}

export default App