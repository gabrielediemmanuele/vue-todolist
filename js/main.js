//* ToDo List
const toDoList = [
  {
    text: "ciao",
    done: false,
  },
  {
    text: "ciao",
    done: false,
  },
  {
    text: "ciao",
    done: false,
  },
  {
    text: "ciao",
    done: false,
  },
  {
    text: "ciao",
    done: false,
  },
  {
    text: "ciao",
    done: true,
  },
];

//* Creo una copia dell'array per evitare che venga
//* sovrascritto..
const myToDoCopy = [...toDoList];

//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      myToDoCopy,
    };
  },

  methods: {},
}).mount("#app");
//*
