const setPriority = (priorityValue, prioritys) => {
  console.log(prioritys);
  if (priorityValue > -1 && priorityValue < 4) {
    prioritys.forEach((element) => {
      element.isSelected = 0;
      if (element.value === priorityValue) {
        element.isSelected = 1;
      }
    });
  }
};
export default setPriority();
