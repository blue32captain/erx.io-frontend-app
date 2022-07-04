<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'
import { ColumnType } from '/@/types/column.type'

export default {
  name: 'AccountDetailsTable',
  props: {
    columns: {
      type: Array as () => Array<ColumnType>,
      required: true,
      default: () => [],
    },
    items: {
      type: Array as () => Array<any>,
      required: false,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const datagrid = ref(new DataGrid())
    props.columns.forEach(column => datagrid.value.addColumn(column.key, column.label, column.type))
    props.items.forEach(row => {
      datagrid.value.addRow(row)
    })
    return {
      datagrid,
    }
  },
}
</script>

<template>
  <v-table

    fullwidth
    pagination
    hoverable
    sortable
    searchable
    :rows-per-page="20"
    :data="datagrid"
    :rows-per-page-options="[20, 50, 70, 100]">
    <template #header>
      <loader :loading="loading" />
    </template>
    <template #actions="props">
      <div class="buttons is-pulled-right">
        <v-button
          tag="router-link"
          :to="{
            name: 'AdminAccount',
            params: {
              id: props.row.accountPublicId,
              type: 'details'
            },
          }"
          type="is-text">
          View
        </v-button>
      </div>
    </template>
  </v-table>
</template>

