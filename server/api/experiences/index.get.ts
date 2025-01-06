import Experiences from '../../models/experience';

export default defineEventHandler(async (event) => {
  try {
    // Fetch all experiences from the database
    const experiences = await Experiences.find();
    return { success: true, data: experiences };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});