import { useState } from "react"
import DropContainer from "./DropContainer"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const KanbanBoard = () => {
    const [data, setData] = useState({
        'Pending': [{ id: 1, title: "Task 1", description: "Task 1 Description" },{ id: 2, title: "Task 2", description: "Task 2 Description" }],
        'In Progress': [{ id: 3, title: "Task 3", description: "Task 3 Description" },],
        'In Review': [{ id: 4, title: "Task 4", description: "Task 4 Description" },{ id: 5, title: "Task 5", description: "Task 5 Description" },{ id: 6, title: "Task 6", description: "Task 6 Description" }],
        'Done': [{ id: 6, title: "Task 6", description: "Task 6 Description" }]
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
        <>
            {/* <div className="OptionContainer">
                <button><FontAwesomeIcon icon={faPlus}/>Add</button>
                <button><FontAwesomeIcon icon={faPenToSquare}/>EDIT</button>
                <button><FontAwesomeIcon icon={faTrash}/> DELETE</button>
            </div> */}


            <div className='dropZonesContainer'>
                {Object.entries(data).map(([key, value]) => {
                    return (<DropContainer
                        key={key}
                        items={value}
                        handleDrop={handleDrop}
                        containerName={key}
                       
                    />)
                })} 
            </div></>
    )
}

export default KanbanBoard;
