<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first()
);
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings("blog", route.path, {
    fields: ["description"],
  });
});
</script>

<template>
  <div>
    <UContainer v-if="post">
      <UPageHeader :title="post.title" :description="post.description">
        <template #headline>
          <UBadge v-bind="post.badge" variant="subtle" />
          <span class="text-gray-700">&middot;</span>
          <time datetime="post.date" class="text-gray-700">{{
            formatDate(post.date)
          }}</time>
        </template>

        <div class="flex flex-wrap items-center gap-3 mt-4">
          <UButton
            v-for="(auteur, index) in post.auteur"
            :key="index"
            color="white"
            variant="soft"
            :to="auteur.to"
            target="_bank"
          >
            <UAvatar
              v-bind="auteur.avatar"
              :alt="`Avatar de ${auteur.name}`"
              size="2xs"
            />
            {{ auteur.name }}
          </UButton>
        </div>
      </UPageHeader>

      <!-- Body -->

      <UPage>
        <UPageBody prose>
          <ContentRenderer :value="post" />
          <!-- Séparateur -->
          <UDivider v-if="surround" class="my-10" />
          <!-- Les liens d'articles suivants et précédents -->
          <UContentSurround v-if="surround" :surround="surround" class="mt-8" />
        </UPageBody>

        <template v-if="post.body.toc?.links.length" #right>
          <UContentToc :links="post.body.toc.links"></UContentToc>
        </template>
      </UPage>
    </UContainer>
  </div>
</template>

<style scoped></style>