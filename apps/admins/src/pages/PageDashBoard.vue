<style scoped>

</style>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { store } from '../stores/user'

  onBeforeMount(() => {
    const user = {
      name: 'kim',
    }

    store.setUser(user)
  })
</script>

<template>
  <main>

  </main>
</template>
