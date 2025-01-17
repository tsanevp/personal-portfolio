import Experiences from '../../models/experience';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const limit:number = parseInt(query?.limit as string, 10) || 0;

    // Fetch either limited or all experiences from the database
    const experiences = await Experiences.find().sort({ order: 1 }).limit(limit);
    return { success: true, data: experiences };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
