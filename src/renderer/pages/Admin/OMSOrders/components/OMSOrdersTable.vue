<script lang="ts">
import { useParams } from '/@/hooks'

export default {
  name: 'OMSOrdersTable',
  setup() {
    const { type } = useParams()

    return { type }
  },
}
</script>

<template>
  <paginated-table v-bind="$props">
    <template #header>
      <loader :loading="$props.loading" />
    </template>
    <template #actions="props">
      <div class="buttons is-pulled-right">
        <v-button
          tag="router-link"
          :to="{
            name: 'adminOMSOrder',
            params: {
              id: props.actions.row.orderId,
              type,
            },
          }"
          type="is-text">
          View
        </v-button>
      </div>
    </template>
  </paginated-table>
</template>

