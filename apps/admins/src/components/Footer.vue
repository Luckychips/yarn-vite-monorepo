<style scoped>
  footer {
    position: fixed;
    bottom: 0;
  }

  .copyright {
    padding-left: 10vw;
  }
</style>

<script setup lang="ts">
  import { store } from '../stores/user'
</script>

<template>
  <footer v-if="store.user" class="bg-body-tertiary w-screen">
    <span class="copyright">{{store.user.name}}</span>
  </footer>
</template>

