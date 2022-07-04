
<script lang="ts">
import { useRouter } from 'vue-router'
import useRoutes from '../hooks/useRoutes'
import { KYCRoutes } from '/@/router/routes'

export default {
  name: 'KYCBottomAction',
  setup() {
    const { getKycRoute } = useRoutes()
    const router = useRouter()

    const onClickNext = () => {
      if (getKycRoute.value?.next?.route?.path) {
        router.push({
          path: getKycRoute.value?.next?.route?.path,
        })
      } else if (getKycRoute.value?.index === KYCRoutes.length - 1) {
        router.push({
          name: 'dashboard',
        })
      }
    }

    const onClickBack = () => {
      if (getKycRoute.value?.back?.route?.path) {
        router.push({
          path: getKycRoute.value?.back?.route?.path,
        })
      }
    }

    return {
      onClickNext,
      onClickBack,
    }
  },
}
</script>

<template>
  <div class="content">
    <v-button class="mr-3" @click="onClickBack" type="is-text" outlined> Back </v-button>
    <v-button @click="onClickNext" type="is-primary"> Continue </v-button>
  </div>
</template>

<style scoped>
.content {
  border-top: 0.1px solid hsl(0deg 0% 82%);
  display: flex;
  justify-content: flex-end;
  padding-top: 2em;
  padding-right: 1em;
}
</style>
