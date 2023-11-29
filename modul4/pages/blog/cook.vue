<template>
    <div>
      <NavbarView />
      <div class="flex items-center justify-center h-screen">
        <div class="bg-pink-200 rounded-lg shadow-md">
          <div class="aspect-w-1">
            <img class="h-auto w-auto max-h-[300px] max-w-[300px] mx-auto object-cover rounded-t-lg" :src="blog.image" :alt="blog.title" />
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2 text-white">{{ blog.title }}</h3>
            <p class="text-gray-600 mb-2">{{ blog.date }}</p>
            <p class="text-white">{{ blog.author }}</p>
            <p class="text-gray-800 mt-4">{{ blog.content }}</p>
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
    components: {
      NavbarView,
      FooterView,
    },
    data() {
      return {
        blog: {
          title: "Blog Title",
          image: "1.jpeg",
          date: "November 1, 2023",
          author: "John Doe",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non dui sit amet quam tincidunt consectetur. Sed venenatis nisl ac justo rutrum, in lacinia diam tincidunt."
        }
      };
    },
  };
  </script>