//* ToDo List
const toDoList = [];

//* Creo una copia dell'array per evitare che venga
//* sovrascritto..
const myToDoCopy = [...toDoList];

//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      myToDoCopy,
      postIt: "",
    };
  },

  methods: {
    deleteTask(index) {
      this.myToDoCopy.splice(index, 1);
    },

    addNewTask() {
      const newPost = {
        text: this.postIt,
        done: false,
      };

      this.myToDoCopy.push(newPost);
      this.postIt = "";
    },

    toggleState(index) {
      this.myToDoCopy[index].done = !this.myToDoCopy[index].done;
    },
  },
}).mount("#app");
//* Voglio creare un nuovo oggetto e
//* inserirlo dentro myToDoCopy al click
//* in più voglio che il testo sia sempre diverso..
//* feat bonus 2
