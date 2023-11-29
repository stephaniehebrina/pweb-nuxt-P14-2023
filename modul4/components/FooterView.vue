<template>
    <footer class="bg-blue-200 py-4">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500 text-sm">
          &copy; {{ currentYear }} P14
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style>
  /* CSS styling for the footer */
  </style>