import React, {createContext, useContext, useState} from 'react';

const TaskContext = createContext();

const TaskProvider = ({children}) => {
  const [taskId, setTaskId] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [userId, setUserId] = useState();

  let value = {
    taskId,
    description,
    status,
    userId,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTask = () => useContext(TaskContext);

export {useTask, TaskContext};
export default TaskProvider;
