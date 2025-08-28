import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CaixaTexto from './caixaTexto.jsx'
import Paragrafo from './paragrafo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paragrafo nome='Duda'/> 
    {/* estou criando uma property chamada nome e passando para o componente parágrafo*/}
    <Paragrafo nome='Bighouse'/> 
    <Paragrafo nome='CU'/> 
    <CaixaTexto></CaixaTexto>

  </StrictMode>,
)
