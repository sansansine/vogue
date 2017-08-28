import store from '../vuex/store'

export function toast (str, icon) {
  store.dispatch('showToast', true)
  if (icon === 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg', str)
  setTimeout(() => {
    store.dispatch('showToast', false)
  }, 1500)
}

export function alert (str) {
  store.dispatch('showAlert', true)
  store.dispatch('alertMsg', str)
  setTimeout(() => {
    store.dispatch('showAlert', false)
  }, 1500)
}
