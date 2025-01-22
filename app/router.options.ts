import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // For browser's back/forward navigation
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Smooth scrolling
      };
    }

    return { top: 0 }; // Default scroll position
  },
};
