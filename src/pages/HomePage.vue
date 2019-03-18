<template>
  <q-page class="flex">
    <q-list>
      <!-- BLOCKCHAIN -->
      <q-item class="row-6">
        <q-item-section>
          <!-- BLOCKCHAIN ROUTER LINK -->
          <router-link :to="{ name: 'blockchain'}">
            <q-item-label
              class="item-label"
              overline
            >BLOCKCHAIN</q-item-label>
          </router-link>
          <!-- BLOCKCHAIN DESCRIPTION -->
          <q-item-label>
            Graduate of the
            <a
              href="https://consensys.net/academy/bootcamp/"
              target="_blank"
            >ConsenSys Academy Developer Program</a>,
            with about two years experience in Ethereum development. Experienced in:
            <ul>
              <li>Smart contract development, testing, and deployment</li>
              <li>Creating web-based front ends to interact with smart contracts</li>
              <li>
                Basic security audits (these audits are NOT suitable replacements
                for full audits from established companies like Trail of Bits and
                ConsenSys Diligence)
              </li>
              <li>
                Decentralized file storage with
                <a
                  href="https://ipfs.io"
                  target="_blank"
                >IPFS</a>
              </li>
              <li>
                General advising needs, such as development guideance or whitepaper
                reviews
              </li>
            </ul>
          </q-item-label>
        </q-item-section>
        <!-- BLOCKCHAIN IMAGE -->
        <q-item-section thumbnail>
          <img src="../../src/statics/quasar-logo.png">
        </q-item-section>
      </q-item>

      <!-- AUTOMATION -->
      <hr>
      <q-item class="row-6">
        <q-item-section>
          <!-- AUTOMATION ROUTER LINK -->
          <router-link :to="{ name: 'automation'}">
            <q-item-label
              class="item-label"
              overline
            >AUTOMATION</q-item-label>
          </router-link>
          <!-- AUTOMATION DESCRIPTION -->
          <q-item-label>
            About three years experience developing software and automation tools,
            including:
            <ul>
              <li>
                Automating routine tasks such as downloading files or
                interacting with a third-party API
              </li>
              <li>Web scraping and crawling</li>
              <li>Wrapping automation tools in Docker containers for improved portability</li>
              <li>Scheduling recurring tasks using Amazon Web Services (AWS)</li>
            </ul>
          </q-item-label>
        </q-item-section>
        <!-- AUTOMATION IMAGE -->
        <q-item-section thumbnail>
          <img src="../../src/statics/quasar-logo.png">
        </q-item-section>
      </q-item>

      <!-- BLOG -->
      <hr>
      <q-item class="row-6">
        <q-item-section>
          <!-- BLOG ROUTER LINK -->
          <router-link :to="{ name: 'blog'}">
            <q-item-label
              class="item-label"
              overline
            >BLOG</q-item-label>
          </router-link>
          <!-- BLOG DESCRIPTION -->
          <q-item-label>
            Thoughts, tutorials, and whatever else I feel like
            writing about
          </q-item-label>
        </q-item-section>
        <!-- BLOG IMAGE -->
        <q-item-section thumbnail>
          <img src="../../src/statics/quasar-logo.png">
        </q-item-section>
      </q-item>

      <!-- RESOURCES -->
      <hr>
      <q-item class="row-6">
        <q-item-section>
          <!-- RESOURCES ROUTER LINK -->
          <router-link :to="{ name: 'resources'}">
            <q-item-label
              class="item-label"
              overline
            >RESOURCES</q-item-label>
          </router-link>
          <!-- RESOURCES DESCRIPTION -->
          <q-item-label>
            A collection of websites, articles, tools, and other helpful
            resources
          </q-item-label>
        </q-item-section>
        <!-- RESOURCES IMAGE -->
        <q-item-section thumbnail>
          <img src="../../src/statics/quasar-logo.png">
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="stylus" scoped>
@import '~quasar-variables';

.flex {
  flex-direction: column;
}

.item-label {
  font-size: 1.75em;
}

.q-item__section--main a {
  text-decoration: none;
  // color: $darktext;
}
</style>
