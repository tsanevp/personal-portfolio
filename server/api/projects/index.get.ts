import Projects from '../../models/project';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const limit: number = parseInt(query?.limit as string, 10) || 0;

    // Fetch all projects from the database
    const projects = await Projects.find().sort({ order: 1 }).limit(limit);;
    return { success: true, data: projects };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
