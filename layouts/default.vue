<template>
  <div>
    <main>
      <nuxt />
    </main>
    <client-only>
      <Cookie />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  components: {
    Cookie: () => import('~/components/layouts/components/Cookies.vue')
  }
}
</script>

<style></style>
