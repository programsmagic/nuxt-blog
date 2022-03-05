<template>
  <div>
    <h1
      class="font-mono
      text-white
      z-50
      text-6xl"
    >
      {{ error.statusCode }} It Seems you are lost?
    </h1>
    <nuxt-link
      to="”/”"
    >
      Take Me Home
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error'
}
</script>

<style lang="scss" scoped>

</style>
