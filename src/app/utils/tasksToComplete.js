const tasksToComplete = (todoList) => {
  let count = 0;
  console.log(todoList);
  todoList.forEach((task) => {
    console.log(task);
    if (task.getStatus().toString !== "Done") {
      count += 1;
      console.log("XD");
    }
  });
  console.log(count);
  return count.toString();
};
export default tasksToComplete;
