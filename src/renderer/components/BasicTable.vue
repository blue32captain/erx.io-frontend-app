<script lang="ts">
import { ref, watchEffect } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'
import { ColumnType } from '/@/types/column.type'
import { formatCamelCase } from '/@/utils/formatters'

export default {
  name: 'OrderTable',
  props: {
    columns: {
      type: Array as () => Array<ColumnType>,
      required: true,
      default: () => [],
    },
    items: {
      type: Object as () => Array<unknown>,
      required: false,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const datagrid = ref(new DataGrid())

    watchEffect(() => {
      datagrid.value = new DataGrid()

      props.columns.forEach(column =>
        datagrid.value.addColumn(column.key, formatCamelCase(column.label as string), column.type),
      )
      props.items.forEach(row => {
        datagrid.value.addRow(row)
      })
    })

    return {
      datagrid,
    }
  },
}
</script>

<template>
  <v-table class="has-text-grey-light" fullwidth hoverable :data="datagrid" v-bind="$props">
    <template #header>
      <loader v-show="loading" :loading="loading" />
    </template>

    <template v-for="(_, name) in $slots" #[name]="props">
      <slot :name="name" :[name]="props" />
    </template>
  </v-table>
</template>

<style>
.has-text-grey-ligh > .table thead td,
.table thead th {
  color: var(--blm-grey-light) !important;
}
</style>

