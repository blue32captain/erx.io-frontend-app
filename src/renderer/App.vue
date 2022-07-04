<script lang="ts">
import { onMounted } from 'vue'

import { setTheme, light } from './theming'
import wssConfigure from './api/wssConfigure'

import useLogin from './pages/Auth/Login/hooks/useLogin'

export default {
  name: 'App',
  setup() {
    wssConfigure()
    const { init } = useLogin()
    onMounted(() => {
      setTheme(light)
      init()
    })
  }
}
</script>

<template>
  <router-view />
  <!-- css purger whitelist -->
  <div v-if="false" class="v-toast-container v-toast-container--bottom">
    <div class="notification is-success is-danger is-warning v-toast--bottom-right" />
  </div>
</template>
