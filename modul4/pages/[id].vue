<template>
  <div>
    <NavbarView />

    <div class="single-blog container mx-auto mt-5">
      <nuxt-link
        class="button bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-8"
        to="/blog"
      >
        Back
      </nuxt-link>

      <div v-if="blog" class="blog-info flex flex-col items-center gap-8">
        <h1 class="text-3xl font-bold mb-4 text-primary">{{ blog.Title }}</h1>

        <div class="blog-img w-full">
          <img :src="blog.Image" :alt="blog.Title" class="max-h-96 w-full object-cover rounded shadow-md" />
        </div>
        

        <div class="blog-details w-full">
          <p class="mb-2 text-primary">
            <span class="font-semibold">Author:</span> {{ blog.Author }}
          </p>
          <p class="mb-2 text-primary">
            <span class="font-semibold">Date:</span> {{ formatDate(blog.Date) }}
          </p>

          <div class="text-lg mb-4">
            <p class="text-primary">
              <span class="font-semibold">Content:</span> {{ blog.Content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <FooterView />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  data() {
    return {
      blog: null, // To store the details of a specific blog
    };
  },
  async mounted() {
    this.fetchBlog();
  },
  methods: {
    async fetchBlog() {
      const blogId = this.$route.params.id;
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/Blog/${blogId}`);
        const data = await response.json();
        this.blog = data;
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
.button {
  display: inline-block;
  text-decoration: none;
  color: #E9D5FF;
}

.button:hover {
  transform: scale(1.05);
}

.single-blog {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.blog-info {
  justify-content: space-between;
}

.blog-details {
  max-width: 600px;
}

.text-primary {
  color: #123c69;
}

.bg-primary {
  background-color: #123c69;
}

.text-white {
  color: #fff;
}
</style>
