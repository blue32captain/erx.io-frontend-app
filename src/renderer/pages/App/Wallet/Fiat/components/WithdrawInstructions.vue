

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'WithdrawContent',
  setup(props) {
    const { t } = useI18n()

    return { t }
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="box has-background-white">
    <p class="has-text-primary mb-3">
      {{ t('desc.instructions') }}
    </p>

    <p>
      {{ t('desc.withdraw.withdrawalFees') }}
    </p>

    <p class="has-background-info-light py-2 px-2 my-2 has-text-weight-bold">
      {{ t('desc.withdraw.step1') }}
    </p>

    <p class="has-background-info-light py-2 px-2 my-2 has-text-weight-bold">
      {{ t('desc.withdraw.step2') }}
    </p>

    <p>
      {{ t('desc.withdraw.step3') }}
    </p>

    <p class="my-2 has-text-weight-bold">
      {{ t('desc.withdraw.step4') }}
    </p>

    <p class="my-2" v-html="t('desc.withdraw.step5')" />

    <p class="my-2 has-background-info-light py-2 px-2" v-html="t('desc.withdraw.step6')" />

    <p class="my-2">{{ t('desc.withdraw.step7') }}</p>
  </div>
</template>

<style>
.intro {
  color: var(--blm-dang);
}
</style>

