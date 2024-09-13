import React from 'react';
import { useDrop } from 'react-dnd';
import DragItem from './Dragitems';

const DropContainer = ({ items, handleDrop, containerName }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK_CARD',
    drop: (item) => {
      if (item.containerName !== containerName) {
        handleDrop(item.containerName, containerName, item)
      }
    },
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
