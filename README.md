# KanBan Board

## Overview

This React application demonstrates a drag-and-drop interface with support for moving items between different containers. It leverages the `react-dnd` library for drag-and-drop functionality and is built using React with functional components and hooks.

You can checkout the [Project Deployment](https://drag-drop-app-weld.vercel.app/)

## Features

-**Add Task**: Create new tasks by clicking the "Add Task" button.
**Delete Task**: Remove tasks by clicking the "Delete" button next to each task.

**React DnD**: Uses the react-dnd library for efficient drag-and-drop interactions.
**State Management**: State management with React Hooks (useState) to handle dynamic task addition, deletion, and reordering.
- **Responsive Design**: The application adapts to various screen sizes, providing a seamless experience on both desktop and mobile devices.

## Packages Used

- **`react`**: JavaScript library for building user interfaces.
- **`react-dnd`**: A set of React utilities for implementing drag-and-drop interactions.
- **`react-dnd-html5-backend`**: The HTML5 backend for `react-dnd`, enabling drag-and-drop functionality in web browsers.

## Technologies Used
**React**: JavaScript library for building user interfaces.
**react-dnd**: For implementing drag-and-drop functionality.
**Vercel**: For deployment and hosting.
## How It Works
**Task Management**:
When the "Add Task" button is clicked, a new task is added to the task list.
Each task can be dragged and dropped within the same container 
Tasks can be deleted by clicking the "Delete" button.
**Drag-and-Drop**:
react-dnd is used for making the tasks draggable. Each task is treated as a draggable item that can be reordered in its container.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Siddharthvj23/drag-drop-app.git
cd drag-drop-app
npm install
npm start