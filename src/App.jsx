import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Contexts/Context'

function App() {
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} h-full` } >
        <Header></Header>
        <Home></Home>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
