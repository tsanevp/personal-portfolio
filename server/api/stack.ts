import Stack from '../models/stack';

export default defineEventHandler(async (event) => {
  try {
    // Fetch stack from the database
    const stack = await Stack.find();

    if (!stack.length) {
      throw new Error("No stack data found");
    }

    stack[0].frontend = stack[0].frontend.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    stack[0].backend = stack[0].backend.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    stack[0].cloudAndDevops = stack[0].cloudAndDevops.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    stack[0].databases = stack[0].databases.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    return { success: true, data: stack };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
