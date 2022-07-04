<script lang="ts">
export default {
  name: 'ProfessionalProfile',
}
</script>

<template>
  <div class="p-1">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Professional Profile</h1>
    <span class="is-size-6 has-text-grey">
      Describe your source of wealth or how the assets( Wealth )
      <br />
      accumulated were acquired
    </span>
    <form class="py- mt-5">
      <v-field class="mb-6">
        <v-select
          placeholder="Source of Wealth ( Select All That Apply )"
          expanded
          size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <v-field class="mb-4">
        <v-select placeholder="What is your industry of occupation?" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <v-field class="mb-4">
        <v-select placeholder="What is your Role/Position?" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <v-field>
        <v-input placeholder="Name of Employer" size="is-medium" />
      </v-field>
    </form>
  </div>
</template>

