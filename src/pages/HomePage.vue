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
              About two years experience developing on Ethereum.
              Current and recent projects include:
              <ul>
                <li>
                  <a
                    class="hyperlink"
                    href="https://ethdashboard.com/"
                    target="_blank"
                  >ETH Dashboard</a>:
                  A personalized dashboard showing the Ethereum data and metrics that
                  you care about. Current metrics include Ether and token prices,
                  MakerDAO stats, gas prices, address metrics, and more. New data
                  is added every week.
                </li>
                <li>
                  <a
                    class="hyperlink"
                    href="https://beta.floatify.net"
                    target="_blank"
                  >Floatify</a>:
                  An application that enables anyone to easily access decentralized
                  financial protocols, while feeling like a normal bank account.
                  Currently it allows users to onboard from dollars to Chai in under
                  two minutes while providing a web2-like experience.
                </li>
                <li>
                  <a
                    class="hyperlink"
                    href="https://www.scopelift.co/blog/fakerdao"
                    target="_blank"
                  >FakerDAO</a>:
                  Developed with <a
                    class="hyperlink"
                    href="https://twitter.com/BenDiFrancesco"
                    target="_blank"
                  >Ben DiFrancesco</a>, FakerDAO is a minimum viable implementation
                  of a straightforward concept: pooling MKR tokens and selling their
                  voting power to the highest bidder.
                </li>
                <li>
                  <a
                    class="hyperlink"
                    href="https://github.com/mds1/bancor-fiat-on-ramp"
                    target="_blank"
                  >Bancor Fiat On-Ramp</a>:
                  This tool provides an easy fiat on/off ramp for entering and exiting
                  Bancor liquidity pools. Users do not need to have a wallet setup, the
                  Gas Station Network (GSN) is used so users do not need Ether for gas,
                  and deposits can be made from 43 US states and nearly 30 countries.
                </li>
                <li>
                  <router-link
                    class="hyperlink"
                    :to="{name: 'compound-rates'}"
                  >
                    Compound Rates
                  </router-link>: A simple tool showing historical rates from
                  <a
                    class="hyperlink"
                    href="https://compound.finance"
                    target="_blank"
                  >Compound</a>, including average interest rates and growth of funds
                  over a user-specified time-span.
                </li>
                <li>
                  Various explainer articles, including a <a
                    class="hyperlink"
                    href="https://medium.com/coinmonks/ethereum-security-analysis-tools-an-introduction-and-comparison-1096194e64d5"
                    target="_blank"
                  >comparison of Ethereum security tools</a>, a
                  <a
                    class="hyperlink"
                    href="https://medium.com/floatify/developing-ethereum-smart-contracts-to-interact-with-other-existing-smart-contracts-4053674b31bd"
                    target="_blank"
                  >tutorial on forking the mainnet</a>, and an explanation of
                  <a
                    class="hyperlink"
                    href="https://medium.com/floatify/developing-ethereum-smart-contracts-to-interact-with-other-existing-smart-contracts-4053674b31bd"
                    target="_blank"
                  >how Compound works</a>,

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
li {
  margin-bottom: 0.5rem;
}

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
