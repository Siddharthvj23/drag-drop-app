import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import './App.css';
import KanbanBoard from './Components/KanbanBoard';

const App = () => {

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const Backend = isMobile ? TouchBackend : HTML5Backend
  return (
    <DndProvider backend={Backend}>
      <main>
        <KanbanBoard />
      </main>
    </DndProvider>
  );
};

export default App;




