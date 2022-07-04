<script lang="ts">
import { formatDateYYYYMMDD } from '/@/utils/formatters'
import { useParams } from '/@/hooks'

export default {
  name: 'UsersTable',

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
          type="is-text"
          tag="router-link"
          :to="{
            name: 'AdminUser',
            params: {
              // eslint-disable-next-line @pathscale/vue3/v-directive
              id: props.actions?.row?.userPublicId,
              type,
            },
          }">
          View
        </v-button>
      </div>
    </template>
    <template #registrationDate="props">
      {{ formatDateYYYYMMDD(props.registrationDate.row.registrationDate) }}
    </template>
  </paginated-table>
</template>

