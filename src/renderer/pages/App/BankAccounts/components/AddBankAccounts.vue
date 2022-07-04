<script lang="ts">
import { useValidation } from 'vue-composable'
import { useErrorMessage, useRequired } from '/@/utils/validators'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AddBankAccount',
  setup() {
    const { t } = useI18n()

    const form = useValidation({
      bank: useRequired(''),
      accountName: useRequired(''),
      accountNumber: useRequired(''),
    })

    const errorMessage = useErrorMessage(form)

    return {
      t,
      errorMessage,
      form,
    }
  },
}
</script>

<template>
  <div class="box p-6">
    <p class="has-text-info is-size-3">{{ t('header.bankAccManagement') }}</p>
    <p class="mt-2 mb-5">
      {{t('desc.addABankAcc')}}
    </p>
    <p class="is-size-5 mb-3 has-text-weight-medium">Bank Account Details</p>
    <v-columns>
       <v-column size="is-4">
          <div class="my-5">
             <v-columns>
                <v-column size="is-4">
                  <v-checkbox>
                    Thailand
                  </v-checkbox>
                </v-column>
                 <v-column size="is-4">
                  <v-checkbox>
                    Outside Thailand
                  </v-checkbox>
                </v-column>
             </v-columns>
          </div>
          <form>
            <v-field :message="errorMessage('bank')" type="is-danger" label="Select a bank">
              <v-input autofocus />
            </v-field>
            <v-field :message="errorMessage('accountName')" type="is-danger" label="Account Name">
              <v-input autofocus />
            </v-field>
            <v-field :message="errorMessage('accountNumber')" type="is-danger" label="Account Number / IBAN">
              <v-input autofocus />
            </v-field>
          </form>
          <p class="my-5">
            Bank account name must be the same as investor name registered with ERX
          </p>
       </v-column>
    </v-columns>
    <v-column size="is-12 ">
      <div class="is-flex is-justify-content-end">
        <v-button
          size="is-medium"
          class="disabled my-5 is-capitalized"
          type="is-primary"
          :disabled="form.$anyInvalid">
            Submit
        </v-button>
      </div>
    </v-column>
  </div>
</template>

<style scoped>
.table-container {
  max-width: 1100px;
}
</style>
