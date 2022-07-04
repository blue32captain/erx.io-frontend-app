<script lang="ts">
export default {
  name: 'TaxForm',
}
</script>

<template>
  <div class="p-1 max-width">
    <h1 class="is-size-3 has-text-weight-semibold mb-5">Welcome</h1>
    <span class="is-size-6 has-text-grey is-block mb-2">
      Your personal information is collected for the purpose of verifying your identity required by
      the Thai Anti-Money Laundering Office. As a company licensed under the Securities and Exchange
      Commission of Thalland, ERX ensures that our customer are in compliance of all regulations.
    </span>
    <span class="is-size-6 has-text-dark has-text-weight-medium is-block mt-5 mb-2">
      Required documents and devices:
    </span>
    <ul class="pr-1 py-4">
      <li class="mb-2">
        1) National Identification card (<b>Thal</b> users only) / Passport (<b>Foreigners</b> only)
      </li>
      <li class="mb-2">2) A device with a camera (either a laptop or smart phone).</li>
    </ul>
    <span class="is-size-6 has-text-grey is-block mt-5 mb-2">
      This process will take at least 10 minutes.
    </span>

    <span class="is-size-6 has-text-grey is-block mt-5 mb-2">
      The ERX Launchpad uses auto-save features. Feel free to exit the process at any point, we will
      take you back to where you left off.
    </span>
  </div>
</template>

<style scoped>
.max-width {
  max-width: 750px;
}
</style>
