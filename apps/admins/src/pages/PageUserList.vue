<template>
  <main>user list page</main>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { store } from '../stores/user'

  onBeforeMount(() => {
    const user = {
      name: 'sung jin',
    }

    store.setUser(user)
  })
</script>

<style scoped>

</style>
