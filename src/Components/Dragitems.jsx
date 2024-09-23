import React from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
      <button className='Delbutton'><FontAwesomeIcon icon={faTrash} transform="shrink-2 left-6"/></button>
      <p>{description}</p>
    </div>
  );
};

export default DragItem;
