<script lang="ts">
import { useRequired, useErrorMessage } from '/@/utils/validators'
import { useValidation } from 'vue-composable'
import { AddTradingSymbol, ModifyTradingSymbol } from '/@/models/admin/request'
import { TradingSymbol } from '/@/store/modules/App/types/trading-symbols.types'
import { computed } from 'vue'

export default {
  name: 'AddProductForm',
  props: {
    current: {
      type: Object as () => TradingSymbol,
    },
    type: {
      type: String as () => 'edit' | 'add',
      default: 'add',
    },
    loading: Boolean,
  },

  emits: ['close', 'submit'],
  setup(props, { emit }) {
    const form = useValidation({
      name: useRequired(props.current?.name || ''),
      productType: useRequired(props.current?.productType || 'spot'),
      // baseCurrencyId: useRequired(''),
      // quoteCurrencyId: useRequired(''),
      minQuantity: useRequired(props.current?.minQuantity || 0),
      minPrice: useRequired(props.current?.minPrice || 0),
      feeProportion: useRequired(props.current?.feeProportion || 0),
    })

    const errorMessage = useErrorMessage(form)

    const onSubmit = (): void => {
      if (form) {
        if (props.type === 'edit') {
          const values: ModifyTradingSymbol = {
            tradingSymbolId: props.current?.tradingPairId as number,
            minQuantity: form.minQuantity.$value,
            minPrice: form.minPrice.$value,
            feeProportion: form.feeProportion.$value,
          }
          emit('submit', values)
        } else {
          const values: AddTradingSymbol = {
            ...form.toObject(),
            quoteCurrencyId: props.current?.baseCurrencyId || '666',
            baseCurrencyId: props.current?.quoteCurrencyId || '666',
          }
          emit('submit', values)
        }
      }
    }

    const isEdit = computed(() => {
      return props.type === 'edit'
    })

    return { form, onSubmit, errorMessage, isEdit }
  },
}
</script>

<template>
  <modal @close="$emit('close')" title="Product">
    <form>
      <v-field :message="errorMessage('name')" label="Name" type="is-danger">
        <v-input v-model="form.name.$value" :disabled="isEdit" />
      </v-field>
      <v-field :message="errorMessage('productType')" label="Type" type="is-danger">
        <v-input v-model="form.productType.$value" disabled />
      </v-field>
      <v-field :message="errorMessage('minQuantity')" label="Min Size" type="is-danger">
        <v-input v-model.number="form.minQuantity.$value" />
      </v-field>
      <v-field :message="errorMessage('minPrice')" label="Min Price" type="is-danger">
        <v-input v-model.number="form.minPrice.$value" />
      </v-field>
      <v-field :message="errorMessage('feeProportion')" label="Fee Proportion" type="is-danger">
        <v-input v-model.number="form.feeProportion.$value" />
      </v-field>
    </form>
    <template #actions>
      <v-button @click="$emit('close')" type="is-light"> Cancel </v-button>
      <v-button :disabled="form.$anyInvalid" :loading="loading" @click="onSubmit" type="is-primary">
        Confirm
      </v-button>
    </template>
  </modal>
</template>
