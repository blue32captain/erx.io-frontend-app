<script lang="ts">
import { SEC_REPORT_TYPES } from '../constants/reports.contants'
import { useValidation } from 'vue-composable'
import { useRequired } from '/@/utils/validators'
import { GetSecReport } from '/@/store/modules/Admin/types/reports.types'

function addDays(date: number, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export default {
  name: 'DownloadReport',
  props: {
    loading: Boolean,
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const form = useValidation({
      type: useRequired(Object.keys(SEC_REPORT_TYPES)[0]),
      date: useRequired<number | null>(null),
    })

    const onSubmit = (): void => {
      const value: GetSecReport = {
        type: SEC_REPORT_TYPES[form.type.$value as keyof typeof SEC_REPORT_TYPES].get,
        beginTime: new Date(form.date.$value as number).getTime() / 1000,
        endTime: addDays(new Date(form.date.$value as number).getTime() / 1000, 1).getTime(),
      }

      emit('submit', value)
    }

    return { SEC_REPORT_TYPES, form, onSubmit }
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
        <v-field class="is-align-items-center" label="Date" horizontal>
          <v-input type="date" v-model="form.date.$value" />
        </v-field>
      </v-column>

      <v-column narrow class="is-flex is-align-items-center">
        <v-field label="Encrypt" horizontal>
          <v-checkbox />
        </v-field>
      </v-column>

      <v-column narrow>
        <v-button
          :loading="loading"
          type="is-primary"
          native-type="submit"
          :disabled="form.$anyInvalid">
          Download
        </v-button>
      </v-column>
    </v-columns>
  </form>
</template>


