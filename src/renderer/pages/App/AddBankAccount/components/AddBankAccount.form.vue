<script lang="ts">
import { ref } from 'vue'
import { useValidation } from 'vue-composable'
import { useErrorMessage, useRequired } from '/@/utils/validators'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AddBankAccountForm',
  setup() {
    const { t } = useI18n()
    const bankLocation = ref<'thailand' | 'outside'>('thailand')
    const banks = [
      'CTBC BANK CO., LTD.',
      'CITIBANK, N.A.',
      'MIZUHO BANK, LTD. BANGKOK BRANCH',
      'ISLAMIC BANK OF THAILAND',
      'THAI PAYMENT NETWORK CO., LTD.',
      'KASIKORNBANK PUBLIC COMPANY LIMITED',
      'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
      'SMALL AND MEDIUM ENTERPRISE DEVELOPMENT BANK OF THAILAND',
      'DEUTSCHE BANK AG.',
      'THE GOVERNMENT HOUSING BANK',
      'ADVANCE FINANCE PUBLIC COMPANY LIMITED',
      'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
      'INDIAN OVERSEA BANK',
      'BNP PARIBAS',
      'SECONDARY MORTGAGE CORPORATION',
      'THANACHART BANK PUBLIC COMPANY LTD.',
      'OVER SEA-CHINESE BANKING CORPORATION LIMITED',
      'KRUNG THAI BANK PUBLIC COMPANY LTD.',
      'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
      'THE THAI CREDIT RETAIL BANK PUBLIC COMPANY LIMITED',
      'EXPORT-IMPORT BANK OF THAILAND',
      'TISCO BANK PUBLIC COMPANY LIMITED',
      'SUMITOMO MITSUI BANKING CORPORATION',
      'CIMB THAI BANK PUBLIC COMPANY LIMITED',
      'GOVERNMENT SAVINGS BANK',
      'THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD.',
      'PROCESSING CENTER CO., LTD.',
      'BANK OF AMERICA, NATIONAL ASSOCIATION',
      'BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
      'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
      'WELLS  FARGO BANK, NATIONAL ASSOCIATION',
      'RHB BANK BERHAD',
      'KIATNAKIN PHATRA BANK PUBLIC COMPANY LIMITED',
      'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
      'JPMORGAN CHASE BANK, NATIONAL ASSOCIATION',
      'STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED',
      'MEGA  INTERNATIONAL COMMERCIAL BANK PUBLIC COMPANY LIMITED',
      'NATIONAL ITMX CO., LTD.',
      'SRISAWAD FINANCE PUBLIC COMPANY LIMITED',
      'SUMITOMO MITSUI TRUST BANK (THAI) PUBLIC COMPANY LIMITED',
      'TMBTHANACHART BANK PUBLIC COMPANY LIMITED',
      'ANZ BANK (THAI) PUBLIC COMPANY LIMITED',
      'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
      'BANGKOK BANK PUBLIC COMPANY LTD.',
      'VISA INTERNATIONAL (THAILAND) LTD.',
    ]
    const form = useValidation({
      bank: useRequired(''),
      accountName: useRequired(''),
      accountNumber: useRequired(''),
    })

    const errorMessage = useErrorMessage(form)

    return {
      t,
      bankLocation,
      banks,
      errorMessage,
      form,
    }
  },
}
</script>

<template>
  <v-columns>
    <v-column size="is-4">
      <div class="my-5">
        <v-columns>
          <v-column narrow>
            <input
              style="height: 20px; width: 20px; vertical-align: middle;"
              class="mr-2"
              type="radio"
              name="thailand"
              v-model="bankLocation"
              value="thailand"/>
            <label>{{ t('addBankAcc.thailand') }}</label>
          </v-column>
          <v-column narrow>
            <input
              style="height: 20px; width: 20px; vertical-align: middle;"
              class="mr-2"
              type="radio"
              name="thailand"
              v-model="bankLocation"
              value="outside"/>
            <label>{{ t('term.bankOutThailand') }}</label>
          </v-column>
        </v-columns>
      </div>
      <form v-if="bankLocation.includes('thailand')">
        <v-field  :message="errorMessage('bank')" type="is-danger" label="Select a bank">
            <v-select v-model="form.bank.$value" expanded>
              <option
                v-for="(bank) in banks"
                :value="bank"
                :key="bank">
                {{ bank }}
              </option>

            </v-select>
        </v-field>
        <v-field :message="errorMessage('accountName')" type="is-danger" label="Account Name">
          <v-input autofocus v-model="form.accountName.$value" />
        </v-field>
        <v-field
          :message="errorMessage('accountNumber')"
          type="is-danger"
          label="Account Number / IBAN">
          <v-input autofocus v-model="form.accountNumber.$value" />
        </v-field>
      </form>

      <form v-if="bankLocation.includes('outside')">
        <v-field :message="errorMessage('bank')" type="is-danger" label="Bank Name">
          <v-input autofocus v-model="form.bank.$value" />
        </v-field>
        <v-field :message="errorMessage('accountName')" type="is-danger" label="Account Name">
          <v-input autofocus v-model="form.accountName.$value" />
        </v-field>
        <v-field
          :message="errorMessage('accountNumber')"
          type="is-danger"
          label="Account Number / IBAN">
          <v-input autofocus v-model="form.accountNumber.$value" />
        </v-field>
        <v-field :message="errorMessage('accountName')" type="is-danger" label="Bank Address">
          <v-textarea color="is-primary" size="is-small" v-model="text" />
        </v-field>
      </form>
      <p class="my-5">
        {{ t('addBankAcc.bankAccountMustSame') }}
      </p>
    </v-column>
  </v-columns>
  <v-column size="is-12 ">
    <div class="is-flex is-justify-content-end">
      <v-button class="disabled my-5 is-capitalized" type="is-primary" :disabled="form.$anyInvalid">
        {{ t('btn.submit') }}
      </v-button>
    </div>
  </v-column>
</template>

<style scoped>
.table-container {
  max-width: 1100px;
}
</style>
