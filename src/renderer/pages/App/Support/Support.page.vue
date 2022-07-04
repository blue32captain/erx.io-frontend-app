<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'Support',
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('header.support') }}</p>
</template>



