import React, { useCallback, useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transFormTasks = (taskObj) => {
      const loadedTasks = [];

      for (const tasKey in taskObj) {
        console.log(tasKey);
        loadedTasks.push({ id: tasKey, text: taskObj[tasKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: 'https://react-project-bfa39-default-rtdb.firebaseio.com/tasks.json',
      },
      transFormTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
