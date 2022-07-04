<script lang="ts">
import { useRequired, useErrorMessage, useGreaterThan } from '/@/utils/validators'
import { useValidation } from 'vue-composable'
import { formatCamelCase } from '/@/utils/formatters'
import { ref } from 'vue'

export default {
  name: 'OrderForm',
  props: {
    action: {
      type: String as () => 'buy' | 'sell',
      default: 'buy',
    },
    actionType: {
      type: String as () => 'market' | 'limit' | 'stop',
      default: 'marketmarket',
    },
    loading: Boolean,
  },

  emits: ['close', 'submit'],
  setup(props) {
    const form = useValidation({
      amount: useRequired(0),
      limit: useGreaterThan(0, props.actionType === 'limit' ? 0 : -1),
      timeInForce: {
        $value: ref('goodTillCanceled'),
      },
      stop: useGreaterThan(0, props.actionType === 'stop' ? 0 : -1),
    })

    const orderDetails = [
      {
        label: 'Market Price',
        value: 'THB 140.00',
      },
      {
        label: 'Fees',
        value: '0',
      },
      {
        label: 'Order Total',
        value: 'THB 140.00',
      },
      {
        label: 'Net',
        value: '0',
      },
    ]

    const errorMessage = useErrorMessage(form)

    const onSubmit = (): void => {
      console.log(form.toObject())
    }

    return { form, onSubmit, errorMessage, formatCamelCase, orderDetails }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <form @submit.prevent="onSubmit">
    <v-field
      :message="errorMessage('amount')"
      type="is-danger"
      :label="`${formatCamelCase(action)} Amount`">
      <v-input
        name="amount"
        autocomplete="amount"
        placeholder="amount"
        type="number"
        v-model.number="form.amount.$value"
        autofocus
        min="0">
        <template #leftIcon>
          <span>XTZ</span>
        </template>
      </v-input>
    </v-field>

    <div v-if="actionType === 'limit'">
      <v-field :message="errorMessage('limit')" type="is-danger" label="Limit Price">
        <v-input
          name="limit"
          autocomplete="limit"
          placeholder="limit"
          type="number"
          v-model.number="form.limit.$value"
          autofocus
          min="0">
          <template #leftIcon>
            <span>THB</span>
          </template>
        </v-input>
      </v-field>

      <v-field label="Time in Force">
        <v-select v-model="form.timeInForce.$value" expanded>
          <option value="goodTillCanceled">{{ formatCamelCase('goodTillCanceled') }}</option>
        </v-select>
      </v-field>
    </div>

    <div v-if="actionType === 'stop'">
      <v-field :message="errorMessage('stop')" type="is-danger" label="Stop Price">
        <v-input
          name="stop"
          autocomplete="stop"
          placeholder="stop"
          type="number"
          v-model.number="form.stop.$value"
          autofocus
          min="0">
          <template #leftIcon>
            <span>THB</span>
          </template>
        </v-input>
      </v-field>

      <v-field label="Time in Force">
        <v-select v-model="form.timeInForce.$value" expanded>
          <option value="goodTillCanceled">{{ formatCamelCase('goodTillCanceled') }}</option>
        </v-select>
      </v-field>
    </div>

    <hr />

    <v-columns v-for="row in orderDetails" :key="row.label" class="mb-0">
      <v-column>
        <span class="has-text-weight-bold">{{ row.label }}</span>
      </v-column>
      <v-column class="has-text-right">
        <span>{{ row.value }}</span>
      </v-column>
    </v-columns>

    <hr />

    <v-button
      expanded
      class="my-5 is-capitalized"
      :loading="loading"
      type="is-light"
      native-type="submit"
      :disabled="form.$anyInvalid">
      Place {{ action }} Order
    </v-button>
  </form>
</template>
