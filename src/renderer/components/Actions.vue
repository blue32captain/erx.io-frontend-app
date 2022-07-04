<script lang="ts">
export default {
  name: 'Actions',
  props: {
    items: {
      type: Array as () => Array<{ event: string; text: string; type?: string }>,
      default: () => [],
    },
  },
  emits: ['add', 'edit', 'refresh', 'view', 'csv', 'custom', 'custom1', 'search', 'editRole'],
  setup(props, { emit }) {
    const handleSelectButtonType = (type: string): string => {
      return type || 'is-primary'
    }

    return {
      emit,
      handleSelectButtonType,
    }
  },
}
</script>

<template>
  <v-columns>
    <v-column>
      <div class="buttons is-justify-content-end">
        <template v-if="items">
          <v-button
            v-for="item in items"
            :type="handleSelectButtonType(item.type)"
            :key="item"
            @click="emit(item.event)">
            <span>{{ item.text }}</span>
          </v-button>
        </template>
      </div>
    </v-column>
  </v-columns>
</template>
