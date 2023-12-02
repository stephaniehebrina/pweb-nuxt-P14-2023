<template>
    <NavbarView />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h2 class="text-2xl font-bold">Blog</h2>

  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="blog in blogs" :key="blog.id" class="bg-red-200 rounded-lg shadow-md p-6">
          <!-- Use dynamic data from the current blog in the loop -->
          <img role="presentation" class="object-cover w-full rounded-lg h-44 dark:bg-gray-500 mb-5" :src="blog.Image">
          <!-- <img class="h-40 w-40 mx-auto mb-4" :src="blog.Image" :alt="`Blog ${blog.id}`"> -->
          <h3 class="text-xl text-purple-951 font-bold mb-2">{{ blog.Title }}</h3>
          <p class="text-gray-600">{{ blog.Description }}</p>
          <br />
          <router-link :to="{ name: 'id', params: { id: blog.id } }"
            class="btn-solid-sm mt-4 ">Read More</router-link>
    </div>
  </div>
</div>

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
      <a href="#" class="btn-solid-sm mt-4">For ayo 🛹 </a>
    </div>
  </div>
</div> -->

<FooterView />
</template>


<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";


export default {
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      blogs: [], // Initialize an empty array to store blogs
    };
  },
  mounted() {
    this.fetchBlogs(); // Fetch blogs when the component is mounted
  },
  methods: {
    async fetchBlogs() {
      try {
        // Make a GET request to your API endpoint using fetch
        const response = await fetch('http://127.0.0.1:3000/api/Blog/');
        const data = await response.json();
        this.blogs = data.docs;
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
  },
};

</script>


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
  @apply px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-800 ;
}
</style>
