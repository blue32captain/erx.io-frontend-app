<script lang="ts">
import { CustomFooter, KycNavbar, KYCBottomAction } from './components'
import useLogin from '/@/pages/Auth/Login/hooks/useLogin'
import { reactive } from 'vue'
import KycStepper from '/@/layouts/components/KYCStepper.vue'

export default {
  name: 'Layout',
  components: { KycNavbar, CustomFooter, KYCBottomAction, KycStepper },
  setup() {
    const state = reactive({
      sidebarOpen: false,
      sidebarExpanded: false,
    })

    const { logout } = useLogin()
    return { logout, state }
  },
}
</script>


<template>
  <div class="is-flex-1 is-flex is-flex-direction-column is-justify-content-space-between">
    <kyc-navbar @logout="logout" v-model:sidebarOpen="state.sidebarOpen" />
    <div class="kyc-section">
      <div class="is-flex-1">
        <v-columns class="is-100-height m-0" mobile>
          <v-column size="is-2">
            <kyc-stepper />
          </v-column>
          <v-column class="has-background-white-bis" size="is-10">
            <v-columns hcentered vcentered class="is-100-height">
              <v-column size="is-6"> <router-view /></v-column>
            </v-columns>
          </v-column>
        </v-columns>
      </div>
      <k-y-c-bottom-action />
    </div>
  </div>
  <custom-footer />
</template>

<style scoped>
.kyc-section {
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

