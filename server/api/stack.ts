import Stack from '../models/stack';

export default defineEventHandler(async (event) => {
  try {
    // Fetch stack from the database
    const stack = await Stack.find();
    return { success: true, data: stack };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
