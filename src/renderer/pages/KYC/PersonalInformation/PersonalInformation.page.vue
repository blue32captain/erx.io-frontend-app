<script lang="ts">
export default {
  name: 'PersonalInformation',
}
</script>

<template>
  <div>
    <h1 class="is-size-3 has-text-weight-semibold my-3">Personal Information</h1>
    <form class="py-3">
      <div class="is-flex mb-3">
        <v-field class="mr-1">
          <v-select placeholder="Title" size="is-medium">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Other">Other</option>
          </v-select>
        </v-field>

        <v-field class="mr-1">
          <v-input placeholder="First Name" size="is-medium" />
        </v-field>
        <v-field class="ml-1">
          <v-input placeholder="Middle Name" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-4">
        <v-input placeholder="Last Name" size="is-medium" />
      </v-field>
      <div class="is-flex mb-3">
        <v-field class="mr-1" label="Date of Birth">
          <v-input placeholder="Date of Birth" size="is-medium" type="date" />
        </v-field>
        <v-field class="ml-1" label="Mobile Number">
          <v-input placeholder="Mobile Number" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-4">
        <v-select placeholder="How did you hear about us?" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <v-field class="mb-4">
        <v-select placeholder="Country of Residency" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
      <v-field class="mb-4">
        <v-select placeholder="What is your industry of occuppation" expanded size="is-medium">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </v-select>
      </v-field>
    </form>
  </div>
</template>

