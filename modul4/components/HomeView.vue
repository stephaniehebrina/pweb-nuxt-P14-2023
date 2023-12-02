<template>
    <!-- <div>
      <nav class="bg-purple-200">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="Kuromi.jpeg" alt="Logo">
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Home</a>
                    <a href="#" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">About</a>
                    <a href="#" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Blog</a>
                    <a href="#" class="text-black px-3 py-2 rounded-md text-sm font-medium bg-white rounded-lg">Features</a>
                  <div class="group inline-block relative">
                    <button class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:border-white focus:ring focus:ring-white" id="dropdown">
                      Contact
                    </button>
                    <div class="hidden group-hover:block absolute z-10 -ml-4 mt-2 transform px-2 w-screen max-w-md sm:px-0">
                      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a href="#" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                            <span class="ml-3 text-base leading-6 font-medium text-gray-900">Instagram</span>
                          </a>
                          <div class="border-t border-gray-100"></div>
                          <a href="#" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                            <span class="ml-3 text-base leading-6 font-medium text-gray-900">Youtube</span>
                          </a>
                          <div class="border-t border-gray-100"></div>
                          <a href="#" class="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
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
      </nav> -->
  
    <!-- Halaman Home -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="bg-pink-300 rounded-lg shadow-md p-6">
    <div class="flex items-center justify-center h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Welcome to Our Blog</h1>
        <p class="mt-2 text-gray-600">Here we provide many stories!</p>
        <div class="mt-4">
          <!-- <a href="#" class="btn-solid-sm">Get Started</a> -->
          <nuxt-link to="/blog" class="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
            Get Started
          </nuxt-link>
        </div>
      </div>
      <div class="ml-8">
        <img class="h-64 w-64" src="logo.png" alt="Logo">
      </div>
    </div>
  </div>
</div>

    <!-- Halaman About -->
    <!-- <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div class="flex items-center justify-center h-screen">
        <div class="text-center">
          <h2 class="text-2xl font-bold">About Us</h2>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-blue-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="fs.jpeg" alt="John Doe">
              <h3 class="text-xl font-bold mb-2">Muhammad Faishal Rizqy</h3>
              <p class="text-gray-600">5027221026</p>
            </div>
            <div class="bg-green-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="st.jpeg" alt="Jane Smith">
              <h3 class="text-xl font-bold mb-2">Stephanie Hebrina Mabunbun Simatupang</h3>
              <p class="text-gray-600">5027221069</p>
            </div>
            <div class="bg-yellow-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="r.jpeg" alt="Michael Johnson">
              <h3 class="text-xl font-bold mb-2">Made Gde Krisna Wangsa</h3>
              <p class="text-gray-600">Tidak tahu</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <!-- </div> -->


<!-- Halaman Blog -->
<!-- <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h2 class="text-2xl font-bold">Blog</h2>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="post in blogPosts" :key="post.id" class="rounded-lg overflow-hidden shadow-md h-full">
      <div class="bg-red-200 rounded-lg shadow-md p-6">
        <img class="h-40 w-40 mx-auto mb-4" src={{ post.Image }} alt="Blog 1">
        <h3 class="text-xl font-bold mb-2">{{ post.Title }}</h3>
        <p class="text-gray-600">{{ post.Desc }}</p>
        <br />
        <a href="/" class="btn-solid-sm mt-4">For detail 👩🏻‍🍳</a>
      </div>
    </div> -->
    <!-- <div class="bg-green-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="12.jpeg" alt="Blog 2">
      <h3 class="text-xl font-bold mb-2">Planting Blog!</h3>
      <p class="text-gray-600">Painting classes provide a safe, non-judgmental environment where students can pour their energy into their artwork and let go of their tension. Many students also express their emotions through their work, which is highly therapeutic. This goes along with the mental and emotional health benefits we talked about above.</p>
      <br />
      <a href="/blog2" class="btn-solid-sm mt-4">For detail 🍓</a>
    </div>
    <div class="bg-blue-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="123.jpeg" alt="Blog 3">
      <h3 class="text-xl font-bold mb-2">Copywritting Blog!</h3>
      <p class="text-gray-600">Copywriting is the art of using persuasive and emotional language to convince your customer to take action through the written form. It's commonly used in various online mediums like web content, social media, emails, and banners with the main purpose of selling a product or service.</p>
      <br />
      <a href="#" class="btn-solid-sm mt-4">For detail 📝</a>
    </div> -->
  <!-- </div>
</div> -->

<!-- Baris Tambahan -->
<!-- <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-yellow-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="1234.jpeg" alt="Blog 4">
      <h3 class="text-xl font-bold mb-2">Band Blog! </h3>
      <p class="text-gray-600">A school band is a musical ensemble made up of students around the same age and skill level. Your school will likely offer a beginning band class in which all students are learning their instruments together. Some schools offer small group or one-on-one lesson instruction to beginning band students.</p>
      <br />
      <a href="#" class="btn-solid-sm mt-4">For detail 🎺</a>
    </div>
    <div class="bg-purple-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="12345.jpeg" alt="Blog 5">
      <h3 class="text-xl font-bold mb-2">Skateboard Blog! </h3>
      <p class="text-gray-600">Learn how to skateboard and grasp the basics of pushing, turning and learning tricks. Skateboard classes are mainly conducted at skate parks across the UK and by skateboard schools (who run groups at skateparks or at suitable facilities).</p>
      <br />
      <a href="#" class="btn-solid-sm mt-4">For Detail 🛹 </a>
    </div>
  </div>
</div> -->


</template>


<style scoped>
/* Add your scoped styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-solid-sm {
  @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700;
}
</style>