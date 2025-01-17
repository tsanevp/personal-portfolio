export default defineNuxtRouteMiddleware(async () => {
  const experienceStore = useExperienceStore();
  if (experienceStore.experiences.length === 0) {
    await experienceStore.fetchExperiencesFromDb();
  }
});
