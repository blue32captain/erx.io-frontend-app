<script lang="ts">
import ActionListItem from './ActionListItem.vue'

export default {
  name: 'ActionList',
  components: { ActionListItem },
  props: {
    actions: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <v-columns mobile multiline gap="is-5">
      <v-column
        v-for="(action, index) in actions"
        :key="index"
        class="is-12-mobile is-6-tablet is-6-desktop is-4-widescreen">
        <action-list-item v-bind="action" />
      </v-column>
    </v-columns>
  </div>
</template>
