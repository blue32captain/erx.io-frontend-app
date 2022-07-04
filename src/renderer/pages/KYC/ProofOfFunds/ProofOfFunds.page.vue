<script lang="ts">
export default {
  name: 'ProofOfFunds',
}
</script>

<template>
  <div class="p-1 max-width">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Upload Proof of Initial Deposit</h1>
    <span class="is-size-6 has-text-grey is-block mb-2 mt-6">
      Where will the funds that are initially being transferred? Please upload a bank statel ent as
      proof of initial deposit (funds). The bank statementm must show the following:
    </span>
    <ul class="pr-1 py-4">
      <li class="mb-2">- Namesf Rank</li>
      <li class="mb-2">- Address and Country of Bank</li>
      <li class="mb-2">- Last 3 months or activities</li>
      <li class="mb-2">- Account Balance</li>
    </ul>
    <v-upload multiple boxed expanded>
      <template #icon>
        <icon name="upload" />
      </template>
      <template #label>
        <span class="has-text-centered"> Choose a file… </span>
      </template>
    </v-upload>
  </div>
</template>

<style scoped>
.max-width {
  max-width: 750px;
}

.file {
  height: 150px;
}
</style>
