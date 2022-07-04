<script lang="ts">
import { formatDateYYYYMMDD } from '/@/utils/formatters'

export default {
  name: 'AccountTable',
  setup() {
    return {
      formatDateYYYYMMDD,
    }
  },
}
</script>

<template>
  <paginated-table v-bind="$props">
    <template #actions="props">
      <div class="buttons is-pulled-right">
        <v-button
          tag="router-link"
          :to="{
            name: 'AdminAccount',
            params: {
              id: props.actions.row.accountPublicId,
              type: 'details',
            },
          }"
          type="is-text">
          View
        </v-button>
      </div>
    </template>
    <template #createdAt="props">
      {{ formatDateYYYYMMDD(props.createdAt.row.createdAt) }}
    </template>
    <template #updatedAt="props">
      {{ formatDateYYYYMMDD(props.updatedAt.row.updatedAt) }}
    </template>
  </paginated-table>
</template>

