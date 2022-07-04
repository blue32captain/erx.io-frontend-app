

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
  name: 'DepositContent',
  props: {
    bankAccount: {
      type: String,
      default: 'THAILAND CLEARING HOUSE (TCL)',
    },
    paymentMethods: {
      type: Array,
    },
    paymentMethod: {
      type: String,
    },
  },
  emits: ['update:paymentMethod'],
  setup(props, { emit }) {
    const { t } = useI18n()

    const computedPaymentMethod = ref(props.paymentMethod)

    const onSelectPaymentMethod = (key: string) => {
      computedPaymentMethod.value = key
      emit('update:paymentMethod', key)
    }

    return { t, computedPaymentMethod, onSelectPaymentMethod }
  },
}
</script>

<template>
  <div class="box has-background-white">
    <p class="has-text-primary mb-3">
      {{ t('desposit.paymentMethod') }}
    </p>

    <v-field addons>
      <v-columns>
        <v-column v-for="method in paymentMethods" :key="method.key">
          <v-button @click="onSelectPaymentMethod(method.key)" type="is-info" light focused>
            <input
              style="height: 20px; width: 20px; vertical-align: middle;"
              class="mr-2"
              type="radio"
              name="paymentMethod"
              v-model="computedPaymentMethod"
              :value="method.key"
              :true-value="method.key"
              :false-value="false"/>
            <label class="is-clickable">{{ method.label }}</label>
          </v-button>
        </v-column>
      </v-columns>
    </v-field>
  </div>

  <div class="box has-background-white">
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
            {{ t('btn.deposit') }}
          </v-button>
        </v-column>
      </v-columns>
    </v-field>

    <div class="px-2 py-2 has-background-info-light mb-2">
      <span v-html="t('desc.deposit.transferMustFromYour')" />
      <strong>{{ bankAccount }}</strong>
    </div>
  </div>
</template>

