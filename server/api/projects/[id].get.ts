import Projects from '../../models/project';

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params as { id: string };
    const projectName = id.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    console.log(projectName);

    // Fetch project by id
    const project = await Projects.findOne({ projectName: projectName });
    if (!project) {
      return { success: false, error: "Project not found" };
    }

    return { success: true, data: project };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
