<template>
  <div v-if="isOpen" class="cookie">
    <div class="alertbar">
      <div class="container text-center">
        &nbsp; {{ message }}.
        &nbsp;
        <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" @click="accept">{{ buttonTextAccept }}</a>&nbsp;
        <a class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" @click="deny">{{ buttonTextDeny }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieMessage',
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny'
    },
    message: {
      type: String,
      default:
        'We use 🍪(Cookies)'
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted')
      }
    },
    accept () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', 'yes')
        this.$ga.enable()
        this.$ga.page(this.$route.fullPath)
      }
    },
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', 'no')
        this.$ga.disable()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  z-index: 1;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f2f2f2;
}
</style>
