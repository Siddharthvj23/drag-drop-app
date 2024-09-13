import React from 'react';
import { useDrop } from 'react-dnd';
import DragItem from './Dragitems';

const DropContainer = ({ items, handleDrop, containerName }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK_CARD',
    drop: (item) => {
      console.log(item, containerName)
      if (item.containerName !== containerName) {
        handleDrop(item.containerName, containerName, item)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="drop-container">
      <div className='statusHeader'>{containerName}</div>
      {items.map(item => {
        return (
          <DragItem key={item.id} id={item.id} title={item.title} description={item.description} containerName={containerName} />
        )
      })}
    </div>
  );
};

export default DropContainer;
