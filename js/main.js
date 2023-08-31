//* ToDo List
const toDoList = [
  {
    text: "",
    done: false,
  },
];

//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      toDoList,
    };
  },
}).mount("#app");
