import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  // Task 1: stores tasks to usestate
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit React assignment", category: "Study" },
    { id: 2, title: "Join UITU Robotics Society", category: "Club" },
    { id: 3, title: "Return library book (Calculus)", category: "Personal" },
  ]);

  // Task 3: input fields state
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Study");

  // Task 4: whenever task changed print it in console
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks:", tasks.length);
  }, [tasks]);

  // Task 3: for new task addd
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
  };

  return (
    <div className="app">
      <h1>Campus Task Board</h1>

      {/* Task 3: Add task form */}
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Enter your task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="Study">Study</option>
          <option value="Club">Club</option>
          <option value="Personal">Personal</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {/* Task 1: .map() --> for display , with unique key */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;