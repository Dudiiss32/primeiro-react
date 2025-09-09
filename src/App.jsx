import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// Sistema de roteamento
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import './App.css'
import AppTarefas from './pages/tarefas/AppTarefas'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/tarefas">Tarefas</Link></li>
              </ul>
            </nav>
          </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/tarefas' element={<AppTarefas/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
