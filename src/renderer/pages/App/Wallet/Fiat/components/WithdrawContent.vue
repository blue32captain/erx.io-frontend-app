

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'WithdrawContent',
  props: {
    totalAvailable: {
      type: String,
      default: '1,659,702,231.27',
    },
    maximumWithdraw: {
      type: String,
      default: '1,659,702,231.27',
    },
    fee: {
      type: String,
      default: '20.00',
    },
    bankAccount: {
      type: String,
      default: 'THAILAND CLEARING HOUSE (TCL)',
    },
  },

  setup(props) {
    const { t } = useI18n()

    const amounts = [
      {
        label: t('desc.yourAvailableThb'),
        value: props.totalAvailable,
      },
      {
        label: t('desc.maximumWithdraw'),
        value: props.maximumWithdraw,
      },
      {
        label: t('desc.fee'),
        value: props.fee,
      },
    ]

    return { t, amounts }
  },
}
</script>

<template>
  <div class="box has-background-white">
    <p class="has-text-primary mb-3">
      {{ t('desc.enterAmountWithdraw') }}
    </p>

    <v-field>
      <v-columns>
        <v-column>
          <v-input type="number" min="0">
            <template #leftIcon>
              <span> THB </span>
            </template>
          </v-input>
        </v-column>
        <v-column>
          <v-button>
            {{ t('btn.withdraw') }}
          </v-button>
        </v-column>
      </v-columns>
    </v-field>

    <v-columns
      v-for="amount in amounts"
      :key="amount.label"
      gapless
      class="px-2 py-2 has-background-info-light mb-2">
      <v-column>
        <p>
          {{ amount.label }}
        </p>
      </v-column>
      <v-column class="is-flex is-justify-content-end">
        <p>฿ {{ amount.value }}</p>
      </v-column>
    </v-columns>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="t('desc.youCanWithdrawAvailableTHB')" />
    <p class="my-2">{{ t('desc.yourBankAccountReceive') }}</p>
    <p class="has-background-info-light py-2 px-2">
      {{ bankAccount }}
    </p>
  </div>
</template>

