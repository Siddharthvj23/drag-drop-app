import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ id, title, description, containerName }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK_CARD',
    item: { id, title, description, containerName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className='Dragitem' ref={drag} style={{ opacity: isDragging ? 0.8 : 1 }}>
      <div className='taskHeader'>{title}</div>
      
      <p>{description}</p>
    </div>
  );
};

export default DragItem;
