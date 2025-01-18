import Experiences from '../../models/experience';

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params as { id: string };

    // Fetch experience by id
    const experience = await Experiences.findById(id);
    if (!experience) {
      return { success: false, error: "Experience not found" };
    }

    return { success: true, data: experience };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
