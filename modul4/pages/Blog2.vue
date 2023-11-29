<template>
    <div class="bg-gray-100 min-h-screen">
      <NavbarView />
  
      <div class="flex justify-center py-12">
        <div class="max-w-4xl bg-pink-200 rounded-lg shadow-md">
          <div class="overflow-hidden rounded-t-lg">
            <img class="w-full h-auto" :src="blog.image" :alt="blog.title" />
          </div>
          
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">{{ blog.title }}</h2>
            <div class="flex items-center mt-4">
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm">{{ blog.date }}</p>
              </div>
              <div class="mx-2 h-4 w-px bg-gray-400"></div>
              <p class="text-sm text-gray-600">{{ blog.author }}</p>
            </div>
            
            <p class="mt-4 text-gray-700">{{ blog.content }}</p>
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
        blog2: {
          title: "Cooking Blog",
          image: "12.jpeg",
          date: "November 1, 2023",
          author: "Cinnamonroll",
          content: "In the realm of culinary adventures, mastering a few essential cooking tips can significantly elevate your skills in the kitchen. First and foremost, organization is key. Before you start cooking, gather all your ingredients and prep them—chop vegetables, measure spices, and have everything within reach. This not only saves time but also ensures a smoother cooking process. Another invaluable tip is to season your dishes thoughtfully. Salt enhances flavors, so season throughout the cooking process, tasting as you go. Don't be afraid to experiment with herbs and spices to add depth and complexity to your meals."
        }
      };
    },
  };
  </script>
  
  <style scoped>
  img {
    object-fit: contain; /* Mengatur tata letak gambar agar sesuai dengan ukuran aslinya */
    max-height: 400px; /* Mengatur tinggi maksimum gambar */
  }
  
  .bg-pink-200 {
    background-color: #FECDD3; /* Mengatur warna latar belakang card menjadi pink */
  }
  
  </style>