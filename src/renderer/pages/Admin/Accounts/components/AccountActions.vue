<script lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'AccountActions',
  emits: ['edit'],
  setup(props, { emit }) {
    const current = ref('details')
    const router = useRoute()

    watch(
      () => router.params,
      () => {
        current.value = router.params.type as string
      },
    )

    return {
      emit,
      current,
    }
  },
}
</script>

<template>
  <v-columns>
    <v-column>
      <div class="buttons is-justify-content-end">
        <v-button
          v-if="current.includes('details')"
          type="is-primary"
          @click="emit('edit')">
          <span>Edit</span>
        </v-button>
        <v-button v-if="current.includes('balances')" type="is-primary">
          <span>Reset Holds</span>
        </v-button>
        <v-button v-if="current.includes('balances')" type="is-primary">
          <span>Submit Ledger entry</span>
        </v-button>
        <v-button v-if="current.includes('balances')" type="is-primary">
          <span>Export Full balances (csv)</span>
        </v-button>
        <v-button v-if="current.includes('treasury-activity')" type="is-primary">
          <span>Show deposit keys</span>
        </v-button>
        <v-button v-if="current.includes('treasury-activity')" type="is-primary">
          <span>Reset treasury Limits</span>
        </v-button>
        <v-button v-if="current.includes('treasury-activity')" type="is-primary">
          <span>Manual Deposit</span>
        </v-button>
        <v-button v-if="current.includes('treasury-activity')" type="is-primary">
          <span>Manual WithDraw</span>
        </v-button>
        <v-button v-if="current.includes('treasury-activity')" type="is-primary">
          <span>Reset Trading Limits</span>
        </v-button>
      </div>
    </v-column>
  </v-columns>
</template>
