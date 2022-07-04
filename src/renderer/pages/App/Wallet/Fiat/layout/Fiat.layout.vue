<script lang="ts">
export default {
  name: 'FiatLayout',
}
</script>

<template>
  <v-columns multiline>
    <v-column class="is-12-touch">
      <slot name="content" />
    </v-column>
    <v-column>
      <slot name="instructions" />
    </v-column>
  </v-columns>
  <slot name="history" />
</template>



