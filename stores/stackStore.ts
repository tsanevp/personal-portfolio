import { defineStore } from 'pinia'
import type { Api } from '~/types/api';

export const useStackStore = defineStore('stack', {
  state: () => ({
    stack: null as Api.Stack | null,
  }),
  actions: {
    setStack(stack: Api.Stack[]) {
      this.stack = stack[0];
    },
  },
  getters: {
    getStack: (state) => state.stack,
  },
});