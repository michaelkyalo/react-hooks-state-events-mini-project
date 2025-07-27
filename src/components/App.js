import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

