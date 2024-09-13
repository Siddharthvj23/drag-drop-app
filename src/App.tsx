import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import KanbanBoard from './Components/KanbanBoard';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <KanbanBoard />
      </main>
    </DndProvider>
  );
};

export default App;




