<script lang="ts">
export default {
  name: 'Information',
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Country Information</h1>
    <form class="py-3">
      <v-field class="mb-4">
        <v-input placeholder="Residencial Address Line 1" size="is-medium" />
      </v-field>
      <v-field class="mb-4">
        <v-input placeholder="Residencial Address Line 2 ( Optional )" size="is-medium" />
      </v-field>
      <div class="is-flex mb-3">
        <v-field class="mr-1">
          <v-input placeholder="City" size="is-medium" />
        </v-field>
        <v-field class="ml-1">
          <v-input placeholder="Country" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1">
          <v-input placeholder="P.O.Box ( Optional )" size="is-medium" />
        </v-field>
        <v-field class="ml-1">
          <v-input placeholder="Zip Code ( Optional )" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1">
          <v-input placeholder="Place Of Birth" size="is-medium" />
        </v-field>
        <v-field class="ml-1">
          <v-input placeholder="Country Of Birth" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-4">
        <v-select placeholder="Country of Citizenship" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
    </form>
  </div>
</template>
