<style scoped>

</style>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { store } from '../stores/user'
  import SlotList from '../components/SlotList.vue'
  import ChartSlot from '../components/slot/Chart.vue'
  import CalendarSlot from '../components/slot/Calendar.vue'

  onBeforeMount(() => {
    const user = {
      name: 'kim',
    }

    store.setUser(user)
  })
</script>

<template>
  <main>
    <section class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <li class="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="flex h-11.5 w-11.5 items-center rounded-full bg-meta-2 dark:bg-meta-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">$3.456K</h4>
              <span class="text-sm font-medium">Total views</span>
            </div>
            <span class="flex items-center gap-1 text-sm font-medium text-meta-3">0.43%</span>
          </div>
        </li>
        <li class="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="flex h-11.5 w-11.5 items-center rounded-full bg-meta-2 dark:bg-meta-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">$45,2K</h4>
              <span class="text-sm font-medium">Total Profit</span>
            </div>
            <span class="flex items-center gap-1 text-sm font-medium text-meta-3">4.35%</span>
          </div>
        </li>
        <li class="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="flex h-11.5 w-11.5 items-center rounded-full bg-meta-2 dark:bg-meta-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">2.450</h4>
              <span class="text-sm font-medium">Total Product</span>
            </div>
            <span class="flex items-center gap-1 text-sm font-medium text-meta-3">2.59%</span>
          </div>
        </li>
        <li class="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div class="flex h-11.5 w-11.5 items-center rounded-full bg-meta-2 dark:bg-meta-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <h4 class="text-title-md font-bold text-black dark:text-white">3.456</h4>
              <span class="text-sm font-medium">Total Users</span>
            </div>
            <span class="flex items-center gap-1 text-sm font-medium text-meta-5">-0.95%</span>
          </div>
        </li>
      </ul>
    </section>
    <SlotList>
      <component :is="ChartSlot" />
      <component :is="CalendarSlot" />
    </SlotList>
  </main>
</template>
