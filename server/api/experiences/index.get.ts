import Experiences from '../../models/experience';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all experiences from the database
    const experiences = await Experiences.find().sort({ order: 1 }).limit(3);
    return { success: true, data: experiences };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
