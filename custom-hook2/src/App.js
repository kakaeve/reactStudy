import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const transformTasks = tasksobj => {
      const loadedTasks = [];

      for (const taskKey in tasksobj) {
        loadedTasks.push({ id: taskKey, text: tasksobj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    sendRequest({ url: process.env.REACT_APP_END_POINT }, transformTasks);
  }, [sendRequest]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
