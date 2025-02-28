<script setup lang="ts">

const links = [
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "A propos",
    to: "/about",
  },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtLink to="/">
        <img src="../public/logo.png" alt="logo de connectly" class="w-auto h-6 shrink-0">
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton />

      <UButton to="https://github.com/Big-Mo777/connectly" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel>
      <UNavigationTree :links="links" />
    </template>
  </UHeader>
</template>

<style scoped></style>