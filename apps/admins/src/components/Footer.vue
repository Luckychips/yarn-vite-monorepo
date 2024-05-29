<style scoped>

</style>

<script setup lang="ts">
  import { store } from '../stores/user'
</script>

<template>
  <footer v-if="store.user">{{store.user.name}}</footer>
</template>

