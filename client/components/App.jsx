import React, { useEffect, useState } from "react";
// import Canvas from "./canvas";
import Gameboard from "./GameBoard.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <div id="app">
      {/* <main>
        {tasks.map((task) => (
          <span className="task" key={task.id}>
            {task.description}
          </span>
        ))}
      </main> */}

      <Gameboard />
    </div>
  );
};

export default App;
