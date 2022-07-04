
<script lang="ts">
import { formatDateYYYYMMDD } from '/@/utils/formatters'
import { useParams } from '/@/hooks'

export default {
  name: 'TradeTable',
  setup() {
    const { type } = useParams()

    return {
      formatDateYYYYMMDD,
      type,
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
            name: 'adminTrade',
            params: {
              id: props.actions.row.tradeId,
              type,
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
  </paginated-table>
</template>

