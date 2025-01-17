import { defineStore } from 'pinia'

interface StackIcon {
  name: string;
  label: string;
}

interface Stack {
  _id: string;
  frontend: StackIcon[];
  backend: StackIcon[];
}

interface ExperienceResponse {
  success: boolean;
  data: Stack[][];
  error?: string;
}

export const useStackStore = defineStore('stack', {
  state: () => ({
    stack: [] as Stack[],
  }),
  actions: {
    async fetchStackFromDb() {
      try {
        const stackResponse = await $fetch<ExperienceResponse>("/api/stack");
        if (stackResponse.success) {
          this.setStack(stackResponse.data[0]);
        } else {
          console.error(
            "Error fetching stack:",
            stackResponse.error,
          );
        }
      } catch (err) {
        console.error("Request failed:", err);
      }
    },
    setStack(stack: Stack[]) {
      this.stack = stack;
    },
  },
  getters: {
    getStack: (state) => state.stack,
  },
});