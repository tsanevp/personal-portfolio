import Projects from '../../models/project';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all projects from the database
    const projects = await Projects.find();
    return { success: true, data: projects };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
