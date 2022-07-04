<script lang="ts">
export default {
  name: 'TabContent',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="box p-4">
    <v-columns>
      <v-column>
        <h4 class="subtitle">{{ label }}</h4>
      </v-column>
      <v-column narrow>
        <slot name="actions" />
      </v-column>
    </v-columns>
    <slot name="table" />
  </div>
</template>
