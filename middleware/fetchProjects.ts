export default defineNuxtRouteMiddleware(async () => {
  const projectStore = useProjectStore();
  if (projectStore.projects.length === 0) {
    await projectStore.fetchProjectsFromDb();
  }
});
