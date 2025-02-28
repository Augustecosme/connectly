<script setup lang="ts">
const columns = [
  {
    label: 'Ressources',
    children: [
      { label: 'Starter Kits' },
      { label: 'Release Notes' },
      { label: 'Blog' },
      { label: 'Partners' },
      { label: 'News' },
      { label: 'Jobs' },
      { label: 'Careers' },
    ],
  },
  {
    label: 'Produits',
    children: [
      { label: 'Cloud' },
      { label: 'Forge' },
      { label: 'Nightwatch' },
      { label: 'Nova' },
    ]
  },
  {
    label: 'Packages',
    children: [
      { label: 'Cashier' },
      { label: 'Dusk' },
      { label: 'Horizon' },
      { label: 'Octane' },
      { label: 'Scout' },
      { label: 'Pennant' },
      { label: 'Pint' },
    ],
  }
];
</script>

<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns :links="columns">
          <template #right>
            <form>
              <UFormField name="" email label="S'inscrire à notre newsletter" size="lg">
                <UInput type="email" class="w-full" placeholder="Entrez votre email">
                  <template #trailing>
                    <UButton type="submit" size="xs" color="primary" label="S'inscrire" />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>

        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      Copyright &copy; {{ new Date().getFullYear() }}. Tous droits réservés.
    </template>

    <template #right>
    <p>
      visite moi ........😁😁
    </p>
    </template>

    <template #center>
      <UButton icon="i-simple-icons-x" color="gray" variant="ghost" to="https://x.com/nuxt_js" target="_blank" />
      <UButton icon="i-simple-icons-discord" color="gray" variant="ghost" to="https://discord.com/invite/ps2h6QT"
        target="_blank" />
      <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/nuxt/nuxt"
        target="_blank" />


    </template>
  </UFooter>
</template>