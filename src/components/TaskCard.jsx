function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <span className="category">{task.category}</span>
    </div>
  );
}

export default TaskCard;