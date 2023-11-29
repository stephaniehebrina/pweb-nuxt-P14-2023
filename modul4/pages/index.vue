<template>
    <div>
      <NavbarView />
      <HomeView />
      <!-- <AboutView /> -->
      <!-- < BlogView /> -->
      <FooterView />
    </div>
  </template>
  
  <script>
  // import AboutView from "@/pages/AboutView.vue";
  // import BlogView from "@/pages/BlogView.vue";
  import NavbarView from "@/components/NavbarView.vue";
  import HomeView from "@/components/HomeView.vue";
  import FooterView from "@/components/FooterView.vue";
  
  export default {
    components: {
      // AboutView,
      NavbarView,
      HomeView,
      FooterView,
    },
    data() {
      return {
        // Data yang diperlukan untuk komponen ini
      };
    },
  };
  </script>