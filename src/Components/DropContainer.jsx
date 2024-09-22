import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DragItem from './Dragitems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const DropContainer = ({ items, handleDrop, containerName }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK_CARD',
    drop: (item) => {
      if (item.containerName !== containerName) {
        handleDrop(item.containerName, containerName, item)
      }
    },
  }));
const [Addbutton,setAddbutton] = useState(false)

const AddNewTask = ()=>{
  Addbutton = !Addbutton 
  if (Addbutton == true){
    DropContainer
  }
 
}



  return (
    <div ref={drop} className="drop-container">
      <div className='statusHeader'>{containerName}</div>
      <button className='addbutton' onClick={AddNewTask}><FontAwesomeIcon icon={faPlus}/></button>
      
      {items.map(item => {
        return (
          <DragItem key={item.id} id={item.id} title={item.title} description={item.description} containerName={containerName} />
        )
      })}
    </div>
  );
};

export default DropContainer;
