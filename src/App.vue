<script setup lang="ts">
import ExtraMap from "./components/ExtraMap.vue";
import FormComponent from "./components/FormComponent.vue";
import TableUsers from "./components/TableUsers.vue";
</script>

<template>
  <div class="pb-5 px-[15px]">
    <header class="h-[100px]">
      <div class="container mx-auto h-full flex items-center gap-5">
        <a href="/">
          <img src="./assets/vue.svg" class="w-16" alt="Vite logo" />
        </a>
      </div>
    </header>

    <FormComponent />

    <TableUsers />

    <ExtraMap />
  </div>
</template>

<style scoped></style>
