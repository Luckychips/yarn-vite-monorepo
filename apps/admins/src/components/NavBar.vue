<script setup>
  import { Banner } from 'common-ui'
  import { useStore } from '../libs/sm'
  import userStore from '../stores/user'
  import { print } from '../libs/greeting'

  function change() {
    print()
    console.log('change')
  }
</script>

<template>
  <nav class="navbar fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
