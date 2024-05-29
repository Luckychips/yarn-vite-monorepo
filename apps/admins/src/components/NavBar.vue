<script setup lang="ts">
  function onChangeKeyword(event: Event) {
    console.log(event.target)
  }
</script>

<template>
  <nav class="navbar fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" @input="onChangeKeyword($event)">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
