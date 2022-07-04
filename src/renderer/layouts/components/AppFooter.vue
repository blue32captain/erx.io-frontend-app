<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppFooter',
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
}
</script>

<template>
  <div class="has-background-white has-border-gray section">
    <v-columns>
      <v-column size="is-4">
        <img
          class="logo"
          width="50"
          src="https://ok11static.oktacdn.com/fs/bco/1/fs011zz007olZRbhl4x7"/>
        <div class="has-text-black is-size-6 mt-2 mb-2">
          <span>{{ t('footer.companyName') }}</span>
        </div>
        <div>
          <span>{{ t('footer.address') }}</span>
        </div>
        <div class="has-text-weight-bold is-size-6">
          <a href="mailto:happy@erx.io">happy@erx.io</a>
        </div>
        <div>
          <div>
            <a
              href="https://www.facebook.com/ERXofficial"
              target="_blank"
              rel="noopener noreferrer"/>
            <a
              href="https://www.linkedin.com/company/er-x"
              target="_blank"
              rel="noopener noreferrer"/>
          </div>
        </div>
      </v-column>
      <v-column>
        <v-columns>
          <v-column>
            <ul>
              <li class="title is-size-6"><span>{{ t('footer.legalCompliance') }}</span></li>
              <li>
                <a
                  href="https://support.erx.io/hc/en-us/articles/4408222711577-Terms-of-Use"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.termsOfUse') }}</span></a>
              </li>
              <li>
                <a
                  href="/static/media/improper-trading-20210723.f6ce0ff3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.improperTrading') }}</span></a>
              </li>
              <li>
                <a href="/market-maker"><span>{{ t('footer.marketMaker') }}</span></a>
              </li>
            </ul>
          </v-column>
          <v-column>
            <ul>
              <li class="title is-size-6"><span>{{ t('footer.aboutUs') }}</span></li>
              <li>
                <a href="/who-we-are"><span>{{ t('footer.whoWeAre') }}</span></a>
              </li>
              <li>
                <a href="/#whyJoin"><span>{{ t('footer.whyJoinErx') }}</span></a>
              </li>
              <li>
                <a href="/our-team"><span>{{ t('footer.ourTeam') }}</span></a>
              </li>
              <li>
                <a
                  href="/static/media/listing-policy-th.4db9e81b.pdf"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.listingPolicy') }}</span></a>
              </li>
              <li>
                <a
                  href="/static/media/trading-rules-th.abf13648.pdf"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.tradingRules') }}</span></a>
              </li>
              <li>
                <a
                  href="/static/media/fs20-erx-en.ecebf1d8.pdf"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.financialStatements') }}</span></a>
              </li>
            </ul>
          </v-column>
          <v-column>
            <ul>
              <li class="title is-size-6"><span>{{ t('footer.happinessCenter') }}</span></li>
              <li>
                <a href="https://support.erx.io/hc/en-us" target="_blank" rel="noopener noreferrer"><span>{{ t('footer.faq') }}</span></a>
              </li>
              <li>
                <a
                  href="https://support.erx.io/hc/en-us/articles/4408222686233-Fees"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.fees') }}</span></a>
              </li>
              <li>
                <a
                  href="https://support.erx.io/hc/en-us/articles/4408222735897-Customer-Happiness-Contact-Channels-"
                  target="_blank"
                  rel="noopener noreferrer"><span>{{ t('footer.customerSupport') }}</span></a>
              </li>
            </ul>
          </v-column>
          <v-column>
            <ul>
              <li class="title is-size-6"><span>{{ t('footer.contact') }}</span></li>
              <li>
                <a href="/raise-complaint"><span>{{ t('footer.raiseComplaint') }}</span></a>
              </li>
            </ul>
          </v-column>
        </v-columns>
      </v-column>
    </v-columns>
    <div>© 2020 erx.io</div>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 0.85rem;
}
</style>


