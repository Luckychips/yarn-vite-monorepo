<script setup lang="ts">
  import { store } from '../stores/user'

  const onChangeKeyword = (event: Event) => {
    store.setUser({
      name: 'lee'
    })

    console.log(event.target)
  }
</script>

<template>
  <nav class="navbar fixed-top bg-body-tertiary">
    <div class="w-screen d-flex justify-end pr-6">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" @input="onChangeKeyword($event)">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
