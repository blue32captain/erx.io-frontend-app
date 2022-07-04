<script lang="ts">
export default {
  name: 'AccountProfile',
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Your Account Profile</h1>
    <form class="py- mt-5">
      <span class="is-size-6 has-text-grey is-block mb-2">
        What is the purpose of your account at deltec?
      </span>
      <v-field class="mb-4">
        <v-select expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <span class="is-size-6 has-text-grey is-block mb-2 mt-6">
        Where are the assets that will be initially transferred to your deltec account
      </span>
      <v-field class="mb-4">
        <v-input
          placeholder="Source of funds of initial Deposit ( Enter Name of Bank )"
          size="is-medium"/>
      </v-field>
      <v-field class="mb-4">
        <v-select placeholder="Country of main bank branch" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <span class="is-size-6 has-text-grey is-block mb-2 mt-6">
        What assets do you expect to have in your portfolio?
      </span>
      <v-field class="mb-4">
        <v-select placeholder="Select your assets" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <span class="is-size-6 has-text-grey is-block mb-2 mt-4">
        List the countries of expected payments and/or transfers.
      </span>
      <v-field class="mb-4">
        <v-select placeholder="Country" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
    </form>
  </div>
</template>

