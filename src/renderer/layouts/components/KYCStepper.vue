
<script lang="ts">
import { KYCRoutes } from '/@/router/routes'
import useRoutes from '../hooks/useRoutes'

export default {
  name: 'KYCStepper',
  setup() {
    const { getKycRoute } = useRoutes()
    const isCurrentTab = (current: number) => {
      return current === getKycRoute.value?.index ? 'step-segment is-active' : 'step-segment'
    }

    return {
      KYCRoutes,
      isCurrentTab,
    }
  },
}
</script>

<template>
  <div class="is-flex is-justify-content-center kyc-stepper-container">
    <ul class="step is-vertical">
      <li v-for="item in KYCRoutes" :key="item.title" :class="isCurrentTab(item.index)">
        <span href="#" class="step-marker" />
        <div class="step-content is-hidden-mobile">
          <p class="is-size-6">{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<style>
.kyc-stepper-container {
  padding-top: 6em;
}

.current,
.is-active .step-marker {
  background-color: var(--blm-prim) !important;
}

.step-segment::after {
  background-color: var(--blm-prim);
}

.step.is-vertical .step-content {
  margin-top: -1.7rem !important;
}

.step:not(.is-hollow) .step-marker:not(.is-hollow) {
  background-color: var(--blm-prim);
  color: rgba(0, 0, 0, 0.7);
}
</style>
