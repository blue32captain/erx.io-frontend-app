<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'

export default {
  name: 'DuplicateAddressTable',
  props: {
    columns: {
      type: Array as () => Array<Record<string, string>>,
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
            name: 'adminProduct',
            params: {
              id: props.row.id,
            },
          }"
          type="is-text">
          View
        </v-button>
      </div>
    </template>
  </v-table>
</template>

