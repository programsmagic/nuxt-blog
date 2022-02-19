<template>
  <div class="body">
    <LayoutHeader />
    <div class="container">
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    LayoutFooter: () => import('~/components/layouts/Footer.vue'),
    LayoutHeader: () => import('~/components/layouts/Header.vue')
  },
  head: {
  }
}
</script>
<style>

@media only screen and (max-device-width: 480px){
 .body {
    padding-top:5rem;
  }
}

@media only screen and (min-device-width: 480px){
  .body {
    padding-top:5rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
