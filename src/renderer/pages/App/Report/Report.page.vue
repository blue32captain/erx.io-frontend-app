<script lang="ts">
import ReportsTable from './components/ReportsTable.vue'

export default {
  name: 'Report',
  components: { ReportsTable },

  setup() {},
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">Report</p>
  <reports-table class="my-2" />
</template>

