import TaskContext from './TaskContext';

import {getData} from '../helpers/storage';

import {useEffect, useState} from 'react';

let dummyTasks = [
  {title: 'dummy Task 1', subtitle: 'Dummy subtitle', status: false},
];

export default TaskContextProvider = ({children}) => {
  const [tasksFromContext, updateTasks] = useState(dummyTasks);
  const [isTasksInStorage, setIsTasksInStorage] = useState(false);

  useEffect(() => {
    initApp();
  }, []);

  async function initApp() {
    let value = await getData();

    if (value) {
      setIsTasksInStorage(true);

      updateTasks(value);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasksFromContext,
        updateTasks,
        setIsTasksInStorage,
        isTasksInStorage,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
