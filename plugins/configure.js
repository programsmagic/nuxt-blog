import APIHelper from './apiHelper.js'

export default function (ctx, inject) {
  const $APIHelper = new APIHelper(ctx)
  inject('APIHelper', $APIHelper)
  ctx.$APIHelper = $APIHelper

  return $APIHelper.init().catch((error) => {
    if (process.client) {
      console.error('Inventory Plugin Error: ', error)
    }
  })
}
