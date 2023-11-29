<template>
  <div>
    <nav class="bg-purple-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="logo.png" alt="Logo">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link to="/" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Home</nuxt-link>
                <nuxt-link to="/about" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">About</nuxt-link>
                <nuxt-link to="/blog" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Blog</nuxt-link>
                <a href="#" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Features</a>
                <div class="group inline-block relative">
                  <button class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:border-white focus:ring focus:ring-white" id="dropdown">
                    Contact
                  </button>
                  <div class="hidden group-hover:block absolute z-10 -ml-4 mt-2 transform px-2 w-screen max-w-md sm:px-0">
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="https://www.instagram.com/ara_its/?hl=en" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                          <span class="ml-3 text-base leading-6 font-medium text-gray-900">Instagram</span>
                        </a>
                        <div class="border-t border-gray-100"></div>
                        <a href="https://www.youtube.com/@roses_are_rosie/videos" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                          <span class="ml-3 text-base leading-6 font-medium text-gray-900">Youtube</span>
                        </a>
                        <div class="border-t border-gray-100"></div>
                        <a href="https://twitter.com/suzy" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                          <span class="ml-3 text-base leading-6 font-medium text-gray-900">X</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span class="nav-item">
            <a class="btn-solid-sm" href="#helpme">Kelompok 14</a>
          </span>
        </div>
      </div>
    </nav>
    
    <nuxt/>
  </div>
</template>

<!-- <script>
export default {
  // Other configurations...
  
  // Add route configuration here
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'aboutview',
        path: '/aboutview',
        component: resolve(__dirname, 'pages/AboutView.vue')

    
      });
    }
  },
  
  // Other configurations...
}
</script> -->

<style scoped>
/* CSS styles specific to app.vue */
</style>