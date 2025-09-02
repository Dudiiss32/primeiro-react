import { useState } from "react";
import TarefasForm from "./TarefasForm";
import TarefasLista from "./TarefasLista";

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
        const novaTarefa = {
            id: Date.now(), // usamos a data, pois n temos gerenciamento de id sem um backend
            texto: texto,

        };
        setTarefas([...tarefas, novaTarefa]);
    }
    return (
        <div>
            <h1>💡 Keepão React</h1>
            <TarefasForm onAddTarefa={addTarefa}/>
            <TarefasLista tarefas={tarefas}/>
        </div>
    )
}

export default AppTarefas;