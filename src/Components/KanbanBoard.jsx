import { useState } from "react"
import DropContainer from "./DropContainer"

const KanbanBoard = () => {
    const [data, setData] = useState({
        'Pending': [{ id: 1, title: "Task 1", description: "Task 1 Description" }],
        'In Progress': [{ id: 2, title: "Task 2", description: "Task 2 Description" }],
        'In Review': [{ id: 3, title: "Task 3", description: "Task 3 Description" }],
        'Done': [{ id: 4, title: "Task 4", description: "Task 4 Description" }]
    })

    const handleDrop = (fromContainer, toContainer, draggedItem) => {
        setData(prevData => {
            return {
                ...prevData,
                [fromContainer]: prevData[fromContainer].filter(item => item.id !== draggedItem.id),
                [toContainer]: [...prevData[toContainer], draggedItem]
            }
        })
    }

    return (
        <div className='dropZonesContainer'>
            {Object.entries(data).map(([key, value]) => {
                return (<DropContainer
                    key={key}
                    items={value}
                    handleDrop={handleDrop}
                    containerName={key}
                />)
            })}
        </div>
    )
}

export default KanbanBoard;
