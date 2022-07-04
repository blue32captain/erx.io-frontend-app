<script lang="ts">
import { VNavbar } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-i18n'

export default {
  name: 'KYCNavbar',
  components: { VNavbar },
  emits: ['logout', 'update:sidebarOpen'],
  setup(props, { emit }) {
    const { t } = useI18n()

    return {
      t,
    }
  },
}
</script>

<template>
  <!--  eslint-disable @pathscale/vue3/v-directive -->
  <v-navbar class="kyc-navbar-container">
    <template #brand>
      <div class="is-flex is-align-items-center">
        <img
          class="brand-container logo"
          src="https://ok11static.oktacdn.com/fs/bco/1/fs011zz007olZRbhl4x7"/>
        <div class="divider has-background-grey" />
        <span class="has-text-black is-size-5"> Launchpad </span>
      </div>
    </template>
    <template #end>
      <button class="button" @click="$emit('logout')">
        {{ t('header.logout') }}
      </button>
    </template>
  </v-navbar>
</template>

<style >
.kyc-navbar-container {
  border-bottom: 0.1px solid hsl(0deg 0% 82%);
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 0.5em;
  align-items: center !important;
}

.brand-container {
  height: 30px;
}

.divider {
  height: 80%;
  width: 2px;
  margin: 0 16px;
}

</style>
