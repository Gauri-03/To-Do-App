Todo App
This Todo App is a simple and effective task management application built using React. It allows users to add, edit, update, and delete tasks, providing an intuitive interface for managing daily to-do lists. The application also saves tasks locally in the browser, ensuring persistence across sessions.

Technologies Used
React: The core library for building the user interface.
TypeScript: Ensures type safety and enhances code maintainability.
Material-UI: Provides a set of React components to build a user-friendly and visually appealing interface.
LocalStorage: Persists tasks between sessions, allowing users to close and reopen the app without losing their to-do list.
CSS: Custom styles are applied to enhance the layout and appearance of the app.
Application Structure
The application is structured into several components, each responsible for a specific functionality:

Components
App.tsx:

The main component that orchestrates the app's functionality.
Manages the list of tasks (todos) and handles adding, editing, updating, and deleting tasks.
Utilizes useState to manage the task list and useEffect to sync tasks with localStorage.
TodoForm.tsx:

A form component that allows users to input and add new tasks.
Uses TextField for task input and Button to submit the task.
The inputted task is passed to the App component for addition to the task list.
TodoList.tsx:

Renders the list of tasks by mapping through the todos array.
Each task is rendered using the TodoItem component.
TodoItem.tsx:

Represents a single task item.
Includes functionalities to edit, delete, and mark tasks as completed.
Utilizes Material-UI components like Checkbox, TextField, and Dialog for interactions and user feedback.

Data Handling
LocalStorage:
The application stores tasks in localStorage, ensuring that the user's task list is preserved even after refreshing the page or closing the browser.
When the app initializes, it checks localStorage for any existing tasks and loads them into the app's state.
Features
Add Task: Users can add a new task to their to-do list using the input form.
Edit Task: Tasks can be edited in case of mistakes or changes.
Update Task: Tasks can be marked as completed or uncompleted by toggling a checkbox.
Delete Task: Users can delete tasks that are no longer needed.
Persistent Storage: Tasks are saved in the browser’s localStorage, so they are available even after closing or refreshing the browser.
How to Run the Project
Clone the Repository:

bash
Copy code
git clone https://github.com/Gauri-03/todo-app.git
cd todo-app
Install Dependencies:

bash
Copy code
npm install
Run the Application:


Conclusion
This Todo App is a simple and efficient tool for task management, demonstrating key concepts of React, TypeScript, and state management. The addition of custom CSS ensures a clean, modern user interface that enhances the overall user experience.
