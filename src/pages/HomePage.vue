<template>
  <q-page class="flex">
    <q-list>
      <!-- BLOCKCHAIN -->
      <br>
      <div class="list--list-item shadow-10">
        <q-item class="row-6">
          <q-item-section class='q-ma-lg'>
            <!-- BLOCKCHAIN ROUTER LINK -->
            <!-- <router-link :to="{ name: 'blockchain'}"> -->
            <q-item-label
              class="item-label"
              overline
            >BLOCKCHAIN</q-item-label>
            <!-- </router-link> -->
            <!-- BLOCKCHAIN DESCRIPTION -->
            <q-item-label class="p-font">
              Currently building
              <a
                class="hyperlink"
                href="https://floatify.net"
                target="_blank"
              >Floatify</a>
              to enable anyone to easily access decentralized financial protocols. The current
              version will allow anyone with a US bank account to take advantage of the
              <router-link
                class="hyperlink"
                :to="{name: 'compound-rates'}"
              >
                high interest rates
              </router-link>
              offered by <a
                class="hyperlink"
                href="https://compound.finance"
                target="_blank"
              >Compound</a>.
              <!--  -->
              <br><br>
              <!--  -->
              Graduate of the 2018
              <a
                class="hyperlink"
                href="https://consensys.net/academy/bootcamp/"
                target="_blank"
              >ConsenSys Academy Developer Program</a>,
              with about a year and a half of experience in Ethereum development, including:
              <ul>
                <li>Smart contract development, testing, and deployment</li>
                <li>Creating web-based front ends to interact with smart contracts</li>
                <li>
                  Basic security audits
                </li>
                <li>
                  Decentralized file storage with
                  <a
                    href="https://ipfs.io"
                    target="_blank"
                  >IPFS</a>
                </li>
                <li>
                  General advising needs
                </li>
              </ul>
            </q-item-label>
          </q-item-section>
          <!-- BLOCKCHAIN IMAGE -->
          <q-item-section thumbnail>
            <!-- <img src="../../src/statics/quasar-logo.png"> -->
          </q-item-section>
        </q-item>
      </div>

      <!-- NAVIGATION -->
      <br>
      <div class="list--list-item shadow-10">
        <q-item class="row-6">
          <q-item-section class='q-ma-lg'>
            <!-- AUTOMATION ROUTER LINK -->
            <!-- <router-link :to="{ name: 'automation'}"> -->
            <q-item-label
              class="item-label"
              overline
            >GUIDANCE, NAVIGATION, & CONTROL</q-item-label>
            <!-- </router-link> -->
            <!-- AUTOMATION DESCRIPTION -->
            <q-item-label class="p-font">
              About four years experience in Guidance, Navigation, and Control
              (GN&C), including:
              <ul>
                <li>
                  Development of
                  <a
                    class="hyperlink"
                    target="_blank"
                    href="https://github.com/mds1/path-planning"
                  >Hierarchical D* Lite</a>,
                  a real-time path-planning algorithm for UAVs in unknown environments
                </li>
                <li>Analysis and development of Kalman Filters for spacecraft</li>
                <li>
                  Development and maintenance of various covariance analysis
                  and trajectory analysis tools
                </li>

              </ul>
            </q-item-label>
          </q-item-section>
          <!-- AUTOMATION IMAGE -->
          <q-item-section thumbnail>
            <!-- <img src="../../src/statics/quasar-logo.png"> -->
          </q-item-section>
        </q-item>
      </div>

      <!-- AUTOMATION -->
      <br>
      <div class="list--list-item shadow-10">
        <q-item class="row-6">
          <q-item-section class='q-ma-lg'>
            <!-- AUTOMATION ROUTER LINK -->
            <!-- <router-link :to="{ name: 'automation'}"> -->
            <q-item-label
              class="item-label"
              overline
            >AUTOMATION</q-item-label>
            <!-- </router-link> -->
            <!-- AUTOMATION DESCRIPTION -->
            <q-item-label class="p-font">
              About three years experience developing software and automation tools,
              including:
              <ul>
                <li>
                  Automating routine tasks such as downloading files or
                  interacting with a third-party API
                </li>
                <li>Web scraping and crawling</li>
                <li>Wrapping automation tools in Docker containers for improved portability</li>
                <li>Scheduling recurring tasks using cloud providers</li>
              </ul>
            </q-item-label>
          </q-item-section>
          <!-- AUTOMATION IMAGE -->
          <q-item-section thumbnail>
            <!-- <img src="../../src/statics/quasar-logo.png"> -->
          </q-item-section>
        </q-item>
      </div>

      <!-- BLOG -->
      <br>
      <div class="list--list-item shadow-10">
        <q-item class="row-6">
          <q-item-section class='q-ma-lg'>
            <!-- BLOG ROUTER LINK -->
            <router-link :to="{ name: 'blog'}">
              <q-item-label
                class="item-label"
                overline
              >BLOG</q-item-label>
            </router-link>
            <!-- BLOG DESCRIPTION -->
            <q-item-label class="p-font">
              Thoughts, tutorials, and whatever else I feel like
              writing about
            </q-item-label>
          </q-item-section>
          <!-- BLOG IMAGE -->
          <q-item-section thumbnail>
            <!-- <img src="../../src/statics/quasar-logo.png"> -->
          </q-item-section>
        </q-item>
      </div>

      <!-- RESOURCES -->
      <br>
      <div class="list--list-item shadow-10">
        <q-item class="row-6">
          <q-item-section class='q-ma-lg'>
            <!-- RESOURCES ROUTER LINK -->
            <router-link :to="{ name: 'resources'}">
              <q-item-label
                class="item-label"
                overline
              >RESOURCES</q-item-label>
            </router-link>
            <!-- RESOURCES DESCRIPTION -->
            <q-item-label class="p-font">
              A collection of websites, articles, tools, and other resources
              that I've found useful or interesting at some point
            </q-item-label>
          </q-item-section>
          <!-- RESOURCES IMAGE -->
          <q-item-section thumbnail>
            <!-- <img src="../../src/statics/quasar-logo.png"> -->
          </q-item-section>
        </q-item>
      </div>
    </q-list>
    <br>
    <br>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="stylus" scoped>
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

.hyperlink {
  text-decoration: underline !important;
  color: $accent;
}

.list--list-item {
  background: $background;
  margin-bottom: 2%;
}
</style>
