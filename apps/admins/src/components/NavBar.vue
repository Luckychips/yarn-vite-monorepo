<script setup>
  import { Banner } from 'common-ui'
  import { useStore } from '../libs/sm'
  import userStore from '../stores/user'

  function onChangeKeyword(event) {
    console.log(event.target.value)
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
