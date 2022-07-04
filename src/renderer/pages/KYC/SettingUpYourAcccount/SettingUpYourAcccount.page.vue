<script lang="ts">
import COUNTRIES from '/@/constants/countries'
import { useValidation } from 'vue-composable'

import { useErrorMessage, useRequired } from '/@/utils/validators'

export default {
  name: 'SettingUpYourAcccount',
  setup() {
    const form = useValidation({
      residence: useRequired('TH'),
      nationality: useRequired('TH'),
    })

    const errorMessage = useErrorMessage(form)

    return {
      errorMessage,
      form,
      COUNTRIES,
    }
  },
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Setting up your account</h1>
    <span class="is-size-6 has-text-grey is-block mb-2">
      Your personal information is collected for the purpose of verifying your identity required by
      the i Anti-Money Laundering Office. As a company licensed under the Securities and Exchange
      Commission of iland, EX ensures t our customer are in compliance of all regulations.
    </span>
    <span class="is-size-6 has-text-dark has-text-weight-medium is-block mt-5 mb-2">
      Please provide information about your country of residence and nationality.
    </span>
    <form class="py-3">
      <v-field
        :message="errorMessage('residence')"
        type="is-danger"
        class="mb-4"
        label="Your country of residence is">
        <v-select v-model="form.residence.$value" size="is-medium">
          <option :value="country.code" v-for="country in COUNTRIES" :key="country.code">
            {{ country.name }}
          </option>
        </v-select>
      </v-field>
      <v-field
        :message="errorMessage('nationality')"
        class="mb-4"
        label="What is your nationality?">
        <v-select v-model="form.nationality.$value" size="is-medium">
          <option :value="country.code" v-for="country in COUNTRIES" :key="country.code">
            {{ country.name }}
          </option>
        </v-select>
      </v-field>
    </form>
  </div>
</template>


