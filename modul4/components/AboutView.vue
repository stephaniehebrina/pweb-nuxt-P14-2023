<template>
    <NavbarView   />
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div class="flex items-center justify-center h-screen">
        <div class="text-center">
          <h2 class="text-2xl font-bold">About Us</h2>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-blue-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="fs.jpeg" alt="John Doe">
              <h3 class="text-xl font-bold mb-2">fisal</h3>
              <p class="text-gray-600">5027221029</p>
            </div>
            <div class="bg-green-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="st.jpeg" alt="Jane Smith">
              <h3 class="text-xl font-bold mb-2">Stephanie Hebrina Mabunbun Simatupang</h3>
              <p class="text-gray-600">5027221069</p>
            </div>
            <div class="bg-yellow-200 rounded-lg shadow-md p-6">
              <img class="h-40 w-40 mx-auto rounded-full mb-4" src="r.jpeg" alt="Michael Johnson">
              <h3 class="text-xl font-bold mb-2">Michael wayne</h3>
              <p class="text-gray-600">5027221037</p>
            </div>
          </div>
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
  
  