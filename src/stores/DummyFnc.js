import { defineStore } from "pinia";

export const useDummyFncStore = defineStore("dummyFnc", {
  state: () => ({
    userStatus: false,
    userData: {},
  }),

  
});
