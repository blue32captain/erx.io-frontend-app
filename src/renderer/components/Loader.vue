

<script lang="ts">
export default {
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>


<template>
  <div class="loader-wrapper">
    <progress v-if="loading" class="progress is-light" />
  </div>
</template>

<style scoped>
.loader-wrapper {
  height: 5px;
  min-height: 1rem;
}
</style>

