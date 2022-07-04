<script lang="ts">
import authStore from '/@/store/modules/Auth/auth.module'

import { CustomFooter } from './components'
import { AppLayout, AuthLayout } from '.'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'Layout',
  components: { AppLayout, CustomFooter, AuthLayout },
  setup() {
    const router = useRouter()

    const useDashboardLayout = computed(() => {
      return authStore.logged && router.currentRoute.value.meta.private
    })

    return { useDashboardLayout }
  },
}
</script>

<template>
  <template v-if="useDashboardLayout">
    <app-layout />
  </template>
  <template v-else>
    <auth-layout />
  </template>
  <custom-footer />
</template>
