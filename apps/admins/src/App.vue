<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <SideBar />
  <main>
    <NavBar />
    <router-view />
    <Footer />
  </main>
</template>
