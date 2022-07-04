<script lang="ts">
import { useValidation } from 'vue-composable'
import { SEC_REPORT_TYPES } from '../constants/reports.contants'
import { useRequired } from '/@/utils/validators'
import { csvToArray, getHeaders, getRows } from '/@/utils/csv'
import { ref, toRaw, watchEffect } from 'vue'
import { UpdateSecReport } from '/@/store/modules/Admin/types/reports.types'

export default {
  name: 'UploadReportForm',
  props: {
    loading: Boolean,
  },
  emits: ['submit'],

  setup(props, { emit }) {
    const form = useValidation({
      file: useRequired<Blob | null>(null),
      type: useRequired(Object.keys(SEC_REPORT_TYPES)[0]),
    })

    const data = ref<Record<string, unknown>[]>([])
    const headers = ref<string[]>([])
    const rows = ref<string[][]>([])

    const onSubmit = (): void => {
      const value: UpdateSecReport = {
        type: SEC_REPORT_TYPES[form.type.$value as keyof typeof SEC_REPORT_TYPES].update,
        tableId: Number.parseInt(data.value[0].table_id as string),
        headers: toRaw(headers.value).slice(1),
        body: toRaw(rows.value.map(row => row.slice(1))),
      }
      emit('submit', value)
    }

    watchEffect(() => {
      if (form.file.$value) {
        const reader = new FileReader()
        reader.onload = function(event) {
          const str = event.target?.result as string
          data.value = csvToArray(str as string, '|')
          headers.value = getHeaders(str as string, '|')
          rows.value = getRows(str as string, '|')
        }
        reader.readAsText(form.file.$value as Blob)
      }
    })

    return {
      form,
      onSubmit,
      SEC_REPORT_TYPES,
      data,
    }
  },
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <v-columns>
      <v-column narrow>
        <v-field class="is-align-items-center" label="Type" horizontal>
          <v-select color="is-info" placeholder="Type" v-model="form.type.$value">
            <option v-for="type in Object.keys(SEC_REPORT_TYPES)" :key="type" :value="type">
              {{ type }}
            </option>
          </v-select>
        </v-field>
      </v-column>

      <v-column narrow>
        <v-upload v-model="form.file.$value" accept=".csv">
          <template #icon>
            <icon fill="#000" name="upload" />
          </template>
          <template #label> Choose a .csv file... </template>
          <template #name> {{ form.file.$value?.name ?? 'No file selected' }} </template>
        </v-upload>
      </v-column>
      <v-column narrow>
        <v-button
          :loading="loading"
          type="is-primary"
          native-type="submit"
          :disabled="form.$anyInvalid">
          Upload
        </v-button>
      </v-column>
    </v-columns>

    <pre v-if="data.length">
    {{ JSON.stringify(data, null, 2) }}
    </pre>
  </form>
</template>
