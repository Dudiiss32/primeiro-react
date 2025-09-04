import { useState } from "react";

const TarefasItem = ({tarefa, onEditTarefa, onDeleteTarefa}) => {
    const [isEditing, SetIsEditing] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);

    const handleEdit = () => {
        if (isEditing) {
            if(novoTexto.trim()){
                // Aqui grava o texto
                onEditTarefa(tarefa.id, novoTexto)
            }
            SetIsEditing(false);
        }else{
            SetIsEditing(true);
        }
    }
    const handleDelete = () => {
        // Aqui apaga a tarefa
        onDeleteTarefa(tarefa.id)
    }

    return (
        <li>
            {isEditing ? (
                <input type="text" value={novoTexto} onChange={(e) => setNovoTexto(e.target.value)} onKeyDown={(e) => {
                    if(e.key === 'Enter') handleEdit()
                }}/>
            ) :(
                <>{tarefa.texto}</>
            )}
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>🗑️</button>
        </li>
        
    );
}
export default TarefasItem