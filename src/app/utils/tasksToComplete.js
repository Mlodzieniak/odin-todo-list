const tasksToComplete = (todoList) => {
  let count = 0;
  todoList.forEach((task) => {
    if (task.getStatus.toString !== "Done") {
      count += 1;
    }
  });
  return count.toString();
};
export default tasksToComplete;
