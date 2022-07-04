<script lang="ts">
export default {
  name: 'TaxForm',
}
</script>

<template>
  <div class="p-1 max-width">
    <h1 class="is-size-3 has-text-weight-semibold my-3">Tax Form</h1>
    <span class="is-size-6 has-text-grey is-block mb-2">
      W-8BEN Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding and
      Reporting (Individuals)
    </span>
    <ul class="pr-1 py-4">
      <li class="mb-2">- For use by individuals. Entities must use Form W-8BEN-E.</li>
      <li class="mb-2">
        - Information about Form W-8BEN and its separate instructions is at
        https://www.irs.gov/formw8ben
      </li>
      <li class="mb-2">
        - Give this form to the withholding agent or payer. Do not send to the IRS.
      </li>
      <br />
    </ul>
    <span class="is-size-6 has-text-dark has-text-weight-medium is-block mb-2">
      PART I: Identification of Beneficial Owner (see instructions)
    </span>
    <form class="py-3">
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input placeholder="Name of individual who is the beneficial owner" size="is-medium" />
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Country of citizenship" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-4">
        <v-input
          size="is-medium"
          placeholder="Permanent residence address ( stree, apt. or suite no, or rural route )"/>
      </v-field>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input
            placeholder="City or town, state or province, include postal code where appropriate"
            size="is-medium"/>
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Country" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-4">
        <v-input size="is-medium" placeholder="Mailing address ( if different from above )" />
      </v-field>
      <div class="is-flex mb-3">
        <v-field class="mr-1 is-100-width">
          <v-input
            placeholder="Mailing city or town, state or province, include postal code"
            size="is-medium"/>
        </v-field>
        <v-field class="ml-1 is-100-width">
          <v-input placeholder="Mailing Country" size="is-medium" />
        </v-field>
      </div>
      <v-field class="mb-6">
        <v-input
          size="is-medium"
          placeholder="U.S taxpayer identification number (SNN or ITIN), if required"/>
      </v-field>
      <span class="is-size-6 has-text-dark has-text-weight-medium is-block mb-2">
        Are there any restrictions on the type of investements which may be held?
      </span>
      <v-field class="mb-4">
        <v-checkbox v-model="value"> Yes </v-checkbox>
        <br />
        <v-checkbox indeterminate> No </v-checkbox>
        <br />
      </v-field>
      <span class="is-size-6 has-text-dark has-text-weight-medium is-block mb-2">
        Are you a director, senior officer or significant security holder of publicly traded
        company, or a director or senior officer of a subsidiary / branch or related entity of such
        a company?
      </span>
      <v-field class="mb-6">
        <v-checkbox v-model="value"> Yes </v-checkbox>
        <br />
        <v-checkbox indeterminate> No </v-checkbox>
        <br />
      </v-field>
      <v-field class="mb-6">
        <v-input
          size="is-medium"
          placeholder="What percentage of your total assets does this investment portfolio represent?"/>
      </v-field>
      <span class="is-size-6 has-text-dark has-text-weight-medium is-block mb-2">
        Please describe vour Investment experience
      </span>
      <v-field class="mb-6">
        <v-checkbox v-model="value"> No investment experience </v-checkbox>
        <br />
        <v-checkbox indeterminate> Little investment experience </v-checkbox>
        <br />
        <v-checkbox indeterminate>
          Moderate experience Chave invested i bonds, equities, funds for 5-10 vears)
        </v-checkbox>
        <br />
        <v-checkbox indeterminate>
          Considerable experience ( bounds, equities, options, foreign exchange tranding)
        </v-checkbox>
      </v-field>
    </form>
  </div>
</template>

<style scoped>
.max-width {
  max-width: 750px;
}
</style>
