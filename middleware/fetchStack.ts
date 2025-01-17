export default defineNuxtRouteMiddleware(async () => {
  const stackStore = useStackStore();
  if (stackStore.stack.length === 0) {
    await stackStore.fetchStackFromDb();
  }
});
