<script lang="ts">
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import authStore from '../store/modules/Auth/auth.module' // TODO load svg

import globalStore from '/@/store/globalStore'

const LogoSVG = 'https://ok11static.oktacdn.com/fs/bco/1/fs011zz007olZRbhl4x7'

export default {
  name: 'LoginLayout',
  setup() {
    const router = useRouter()

    watchEffect(() => {
      if (authStore.logged) router.push(globalStore.previousRoute || '/dashboard')
    })

    return { LogoSVG, router }
  },
}
</script>

<template>
  <v-columns hcentered gapless vcentered class="is-flex-1">
    <v-column class="is-5-tablet is-4-desktop is-3-fullhd">
      <div class="section box has-border-gray">
        <div class="is-flex is-justify-content-center mb-5">
          <img :src="LogoSVG" width="80" alt="ERX" />
        </div>
        <div class="has-text-centered mb-5">
          <b> {{ router.currentRoute.value.meta.title }}</b>
        </div>
        <router-view />
      </div>
    </v-column>
  </v-columns>
</template>



