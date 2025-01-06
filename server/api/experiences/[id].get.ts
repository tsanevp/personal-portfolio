import Experiences from '../../models/experience';

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params as { id: string };
    console.log(id);


    // Fetch experience by id
    const experience = await Experiences.findById(id);

    console.log(experience);
    if (!experience) {
      return "Experience not found";
    }

    return { success: true, data: experience };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
