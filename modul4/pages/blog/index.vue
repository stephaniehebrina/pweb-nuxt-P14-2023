<template>
    <NavbarView />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h2 class="text-2xl font-bold">Blog</h2>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-red-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="1.jpeg" alt="Blog 1">
      <h3 class="text-xl font-bold mb-2">Cooking Blog!</h3>
      <p class="text-gray-600">A cooking school is an institution devoted to education in the art and science of cooking and food preparation. There are many different types of cooking schools around the world, some devoted to training professional chefs, others aimed at amateur enthusiasts, with some being a mixture of the two.</p>
      <br />
      <!-- <a href="/1" class="btn-solid-sm mt-4">For detail 👩🏻‍🍳</a> -->
      <nuxt-link to="/blog1" class="btn-solid-sm mt-4">For detail 👩🏻‍🍳</nuxt-link>
    </div>
    <div class="bg-green-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="12.jpeg" alt="Blog 2">
      <h3 class="text-xl font-bold mb-2">Planting Blog!</h3>
      <p class="text-gray-600">Painting classes provide a safe, non-judgmental environment where students can pour their energy into their artwork and let go of their tension. Many students also express their emotions through their work, which is highly therapeutic. This goes along with the mental and emotional health benefits we talked about above.</p>
      <br />
      <!-- <a href="#" class="btn-solid-sm mt-4">For detail 🍓</a> -->
      <nuxt-link to="/blog2" class="btn-solid-sm mt-4">For detail 🍓</nuxt-link>
    </div>
    <div class="bg-blue-200 rounded-lg shadow-md p-6">
      <img class="h-40 w-40 mx-auto mb-4" src="123.jpeg" alt="Blog 3">
      <h3 class="text-xl font-bold mb-2">Copywritting Blog!</h3>
      <p class="text-gray-600">Copywriting is the art of using persuasive and emotional language to convince your customer to take action through the written form. It's commonly used in various online mediums like web content, social media, emails, and banners with the main purpose of selling a product or service.</p>
      <br />
      <a href="#" class="btn-solid-sm mt-4">For detail 📝</a>
    </div>
  </div>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
</div>

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
      // Data yang diperlukan untuk komponen ini
    };
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
  @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700;
}
</style>
