<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'SystemMetrics',
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  },
}
</script>

<template>
  <div>{{ t('table.noData') }}</div>
</template>

