// componente paragrafo
import { useState } from 'react'
// importando o useState de dentro da biblio react

const Paragrafo = (props) => {
    const [pontos, setPontos] = useState(0)
    // retorna o 0 q vai ser colocado nos pontos e ele mesmo

    const aumentarPontos = () => {
        setPontos(pontos + 1)
    }
    const diminuirPontos = () => {
        setPontos((pontos == 0) ? 0 : pontos - 1)
        // return (pontos == 0) ? 0 : setPontos(pontos -1)
        
    }


    return (
        <div>
            <p>Olá! Seja bem-vindo {props.nome}.</p>
            <p>{props.nome} tem {pontos} pontos. <button onClick={aumentarPontos}>+</button> <button onClick={diminuirPontos}>-</button></p>
            
        </div>
    )
    // em props tem q usar {props.nomeDaProp}
}

export default Paragrafo 
// ta exportando para poder usar em outro arquivo