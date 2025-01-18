import Education from '../models/education';

export default defineEventHandler(async (event) => {
  try {
    // Fetch my education from the database
    const education = await Education.find().sort({ endDate: -1 });
    return { success: true, data: education };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
