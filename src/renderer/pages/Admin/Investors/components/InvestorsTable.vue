<script lang="ts">
export default {
  name: 'InvestorsTable',
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
            name: 'AdminAccount',
            params: {
              id: props.row.accountId,
            },
          }"
          type="is-text">
          View
        </v-button>
      </div>
    </template>
  </paginated-table>
</template>

