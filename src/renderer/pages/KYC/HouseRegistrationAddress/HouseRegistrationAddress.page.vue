<script lang="ts">
// erx
export default {
  name: 'HouseRegistrationAddress',
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">House Registration Address</h1>
    <form class="py-3">
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-select placeholder="Country" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Address number" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="Address Line 1" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Address Line 2" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="Sub-Region" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="City" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="State/Province/Region" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Postal Code" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-6">
        <v-checkbox class="mb-2">
          Current address/Mailing Address same as house registration address
        </v-checkbox>
        <br />
        <v-checkbox class="mb-2">
          Work address same as current address/mailing address
        </v-checkbox>
        <br />
      </v-field>
    </form>
  </div>
</template>

