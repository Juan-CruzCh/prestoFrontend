
import { useEffect } from 'react'
import './App.css'
import { AppRouter } from './core/router/AppRouter'
import { useAuthStore } from './core/context/auth'
function App() {
  const autenticacion = useAuthStore((s)=> s.verificarAuth)
  useEffect(()=>{
    autenticacion()
  },[])
  return (
    <AppRouter />
  )
}

export default App
