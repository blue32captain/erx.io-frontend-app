<script lang="ts">
// erx
export default {
  name: 'Information',
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Provide the following information</h1>
    <form class="py-3">
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-select placeholder="Occupation" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-select placeholder="Business Type" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="Company of work" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Job Title" size="is-medium" />
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-select placeholder="Income range (per month)" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-select placeholder="Source of income" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
      </div>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="What country is your income from" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-select placeholder="Highest education" expanded size="is-medium">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </v-select>
        </v-field>
      </div>
      <v-field>
        <v-select placeholder="Investment objective" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
    </form>
  </div>
</template>

