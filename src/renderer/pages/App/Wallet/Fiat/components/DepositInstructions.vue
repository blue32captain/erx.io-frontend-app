

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'WithdrawContent',
  props: {
    paymentMethod: {
      type: String,
      default: 'qr',
    },
    bankName: {
      type: String,
      default: 'Siam Commercial Bank',
    },
    accountName: {
      type: String,
      default: 'ERX Co., Ltd. for Client',
    },
    accountNumber: {
      type: String,
      default: '1234567890',
    },
    branch: {
      type: String,
      default: 'Q house Lumpini',
    },
    accountType: {
      type: String,
      default: 'Savings',
    },
    swiftCode: {
      type: String,
      default: 'SCBTHAILAND',
    },
  },
  setup(props) {
    const { t } = useI18n()

    const steps = {
      qr: [
        { title: t('desc.deposit.inputTheAmount') },
        {
          title: t('desc.deposit.ScanQrcodePayment'),
          content: [
            { title: t('bankAcc.bank'), value: props.bankName },
            { title: t('addBankAcc.accountName'), value: props.accountName },
          ],
        },
        { title: t('desc.deposit.OurTeamWillProcess') },
      ],
      bankTranfer: [
        {
          title: t('desc.deposit.transferYourFunds'),
          content: [
            { title: t('bankAcc.bank'), value: props.bankName },
            { title: t('addBankAcc.accountName'), value: props.accountName },
            { title: t('bankAcc.accNum'), value: props.accountNumber },
            { title: t('acc.branch'), value: props.branch },
            { title: t('acc.accType'), value: props.accountType },
            { title: t('acc.swiftCode'), value: props.swiftCode },
          ],
        },
        {
          title: t('desc.deposit.inputTheAmountAndClick'),
        },
        { title: t('desc.deposit.emailWillPoppedUp') },
      ],
    }

    return { t, steps }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <div class="box has-background-white">
    <p class="has-text-primary mb-3">
      {{ t('desc.instructions') }}
    </p>
    <div class="content">
      <v-timeline :stages="steps[paymentMethod]">
        <template #default="props">
          <span v-html="props.stage.title" />
          <br />
          <div v-if="props.stage.content">
            <div class="has-background-info-light px-2 py-2">
              <v-columns v-for="c in props.stage.content" :key="c.title">
                <v-column>
                  <p>
                    {{ c.title }}
                  </p>
                </v-column>
                <v-column>
                  <p class="has-text-primary">
                    {{ c.value }}
                  </p>
                </v-column>
              </v-columns>
            </div>
            <p class="mt-4" v-if="paymentMethod === 'qr'">
              {{ t('popup.qrcode.willBeExpire') }}
            </p>
          </div>
        </template>
      </v-timeline>
    </div>

    <div v-if="paymentMethod === 'bankTranfer'" class="px-2 py-2 has-background-info-light mb-2">
      <span v-html="t('desc.withdraw.step6')" />
      <strong>{{ bankAccount }}</strong>
    </div>

    <p class="my-2">{{ t('desc.withdraw.step7') }}</p>
  </div>
</template>

<style>
.color {
  color: var(--blm-prim);
}

.intro {
  color: var(--blm-dang);
}
</style>

