<script lang="ts">
import { computed, reactive, ref, toRaw, watch, watchEffect } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'
import { useRoute, useRouter } from 'vue-router'
import { ColumnType } from '/@/types/column.type'

export default {
  name: 'PaginatedTable',
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
    total: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const datagrid = ref(new DataGrid())
    const rowsPerPage = ref(25)
    const currentPage = ref(1)
    const rowsPerPageOptions = [10, 25, 50, 100]

    const handlePageChange = (page: number) => {
      currentPage.value = page
    }

    watchEffect(() => {
      // TODO use watch instead
      console.log(currentPage.value, rowsPerPage.value)

      setTimeout(() => {
        const query = { ...route.query, page: currentPage.value, limit: rowsPerPage.value }
        router.push({
          path: route.path,
          query,
        })
      }, 200)
    })

    watch(
      () => [props.items, props.columns],
      () => {
        datagrid.value = new DataGrid()
        props.columns.forEach(column =>
          datagrid.value.addColumn(column.key, column.label, column.type),
        )
        props.items.forEach(row => {
          datagrid.value.addRow(row)
        })
      },
    )

    const searchParams = reactive({}) as any

    const searchableColums = computed(() => {
      const columns = props.columns.filter(column => column.searchableKey)
      if (columns.length === 0) {
        return null
      }
      return columns
    })
    const clearButton = () => {
      const keys = Object.keys(searchParams)
      keys.forEach(key => {
        searchParams[key] = undefined
      })
      onSubmit()
    }
    const onSubmit = () => {
      currentPage.value = 1
      const query = { page: currentPage.value, limit: rowsPerPage.value }
      const searchQuery = toRaw(searchParams) as Record<string, string>
      const keys = Object.keys(searchQuery)
      const search = {}

      keys.forEach(key => {
        if (searchQuery[key]) {
          Object.assign(search, {
            [key]: searchQuery[key],
          })
        }
      })
      router.push({
        path: route.path,
        query: { ...query, ...search },
      })
    }

    return {
      datagrid,
      rowsPerPage,
      rowsPerPageOptions,
      currentPage,
      handlePageChange,
      searchableColums,
      searchParams,
      clearButton,
      onSubmit,
    }
  },
}
</script>

<template>
  <form
    v-if="searchableColums"
    @submit.prevent="onSubmit"
    class="is-flex px-2 pt-3 has-border-gray is-justify-content-space-between">
    <v-columns class="mb-0">
      <v-column v-for="column in searchableColums" :key="column.key">
        <v-field class="mr-3">
          <v-input
            :placeholder="column.label"
            type="text"
            v-model="searchParams[column.searchableKey]"/>
        </v-field>
      </v-column>
    </v-columns>

    <v-columns class="mb-1">
      <v-column>
        <v-button type="is-primary" native-type="submit" class="is-right">Search</v-button>
      </v-column>

      <v-column>
        <v-button type="is-primary" @click="clearButton" class="is-right">Clear</v-button>
      </v-column>
    </v-columns>
  </form>

  <v-table
    fullwidth
    hoverable
    :rows-per-page="20"
    :data="datagrid"
    :rows-per-page-options="[20, 50, 70, 100]">
    <template #header>
      <loader :loading="loading" />
    </template>

    <template v-for="(_, name) in $slots" #[name]="props">
      <slot :name="name" :[name]="props" />
    </template>
    <template #footer>
      <div class="py-3">Showing {{ items?.length }} of {{ total }} results</div>

      <div class="pagination-container px-3">
        <v-select v-model="rowsPerPage">
          <option v-for="value in rowsPerPageOptions" :key="value" :value="value">
            {{ value }}
          </option>
        </v-select>
        <!-- eslint-disable @pathscale/vue3/v-directive -->
        <v-pagination
          class="px-1"
          :total="total"
          :current="currentPage"
          @update:current="handlePageChange"
          :range-before="1"
          :range-after="1"
          order="is-centered"
          :per-page="rowsPerPage"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"/>
      </div>
    </template>
  </v-table>
</template>

