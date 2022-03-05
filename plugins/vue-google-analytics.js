import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

export default (ctx) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(vueAnalytics, {
    id: 'UA-222096942-2',
    disabled: () => {
      const getGDPR = window.localStorage.getItem('GDPR:accepted')
      if (typeof getGDPR !== 'undefined' && getGDPR === 'no') {
        return true
      }
      if (typeof getGDPR !== 'undefined' && getGDPR === 'yes') {
        return false
      }
      return true
    },
    router: ctx.app.router,
    // Remove debug before deployment
    debug: {
      enabled: true,
      sendHitTask: true
    }
  })
}
