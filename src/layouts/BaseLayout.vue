<template>
  <q-layout
    class="background-image"
    view="hhh Lpr fff"
  >
    <!-- =================================================================== -->
    <!--                             HEADER                                  -->
    <!-- =================================================================== -->
    <q-header class="header shadow-3 row">
      <q-toolbar class="all-content-format">
        <!-- 1: SITE LOGO -->
        <router-link
          class="no-text-decoration col-xs-3 col-sm-auto"
          to="/"
        >
          <img
            src="statics/favicons/main-404x404.jpeg"
            height="60 rem"
            class="q-ma-md"
            style="border-radius: 50%;"
          >
        </router-link>

        <!-- 2: SITE NAME/SUBTITLE -->
        <router-link
          class="no-text-decoration float-to-left col-xs-8 col-sm-auto"
          to="/"
        >
          <q-toolbar-title class='header--title'>Matt Solomon
            <div class='header--subtitle'>Blockchain & automation</div>
          </q-toolbar-title>
        </router-link>

        <!-- ============================ NOTE ============================= -->
        <!-- Currently, 3A and 3B must be kepy in sync manually, i.e. if a   -->
        <!-- menu item is added to 3A it must manually be added to 3B. The   -->
        <!-- Quasar `gt-` and `lt-` prefixes are used with the `md` and `lg` -->
        <!-- classes to toggle which of 3A or 3B is shown. Source here:      -->
        <!-- https://quasar-framework.org/components/visibility.html         -->
        <!--                                                                 -->
        <!-- TODO: Update this so 3A and 3B automatically stay in sync       -->
        <!-- =============================================================== -->
        <!--
        -->
        <!-- 3A: MENU BUTTON (for small screen)-->
        <q-btn
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
          class="float-to-right lt-sm menu-button col-xs-2"
          flat
          dense
        >
          <q-icon name="fas fa-bars" />
          <!-- Menu -->
        </q-btn>

        <!-- 3B. MENU ITEMS (for large screens) -->
        <ul class="gt-xs ">
          <!-- HOME -->
          <router-link
            :to="{ name: 'home' }"
            active-class="active-page"
            class="no-text-decoration nav"
            exact
          >
            <a>Home</a>
          </router-link>

          <!-- BLOCKCHAIN -->
          <!-- <router-link
            :to="{ name: 'blockchain' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Blockchain</a>
          </router-link> -->

          <!-- AUTOMATION -->
          <!-- <router-link
            :to="{ name: 'automation' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Automation</a>
          </router-link> -->

          <!-- BLOG -->
          <router-link
            :to="{ name: 'blog' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Blog</a>
          </router-link>

          <!-- RESOURCES -->
          <router-link
            :to="{ name: 'resources' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Resources</a>
          </router-link>
        </ul>

        <!-- BEGIN MENU ITEM LIST FOR 3A -->
        <q-drawer
          :overlay="true"
          content-class="drawer"
          elevated
          side="right"
          v-model="rightDrawerOpen"
        >
          <!-- BEGIN DRAWER MENU SECTION -->
          <q-list
            link
            no-border
          >
            <!-- LIST OF MENU ITEMS -->
            <!-- ITEM: Home -->
            <q-item
              :to="{ name: 'home' }"
              exact
              class="list--list-item shadow-4"
            >
              <q-item-section class='q-ma-lg'>Home</q-item-section>
            </q-item>
            <br>

            <!-- ITEM: Blockchain -->
            <!-- <q-item
              :to="{ name: 'blockchain' }"
              separator
            >
              <q-item-section>Blockckain</q-item-section>
            </q-item> -->

            <!-- ITEM: Automation -->
            <!-- <q-item
              :to="{ name: 'automation' }"
              separator
            >
              <q-item-section>Automation</q-item-section>
            </q-item> -->

            <!-- ITEM: Blog -->
            <q-item
              :to="{ name: 'blog' }"
              class="list--list-item shadow-4"
            >
              <q-item-section class='q-ma-lg'>Blog</q-item-section>
            </q-item>
            <br>

            <!-- ITEM: Resources -->
            <q-item
              :to="{ name: 'resources' }"
              class="list--list-item shadow-4"
            >
              <q-item-section class='q-ma-lg'>Resources</q-item-section>
            </q-item>
            <br>

            <!-- ITEM: Social Media -->
            <q-item class="list--list-item shadow-4 row">
              <q-item-section class='navbar-icons q-ma-lg'>
                <div class="col-auto">
                  <ul>
                    <!-- LINKEDIN -->
                    <a
                      href="https://www.linkedin.com/in/msolomon4/"
                      target="_blank"
                    >
                      <img
                        alt="LinkedIn"
                        src="../statics/logos/linkedin.svg"
                        class='navbar-icon'
                      >
                    </a>
                    <!-- GITHUB -->
                    &nbsp;&nbsp;
                    <a
                      href="https://github.com/mds1"
                      target="_blank"
                    >
                      <img
                        alt="GitHub"
                        src="../statics/logos/github.svg"
                        class='navbar-icon'
                      >
                    </a>
                    <!-- TWITTER -->
                    &nbsp;&nbsp;
                    <a
                      href="https://twitter.com/msolomon44"
                      target="_blank"
                    >
                      <img
                        alt="Twitter"
                        src="../statics/logos/twitter.svg"
                        class='navbar-icon'
                      >
                    </a>
                    <!-- MEDIUM -->
                    &nbsp;&nbsp;
                    <a
                      href="https://medium.com/@msolomon44"
                      target="_blank"
                    >
                      <img
                        alt="Medium"
                        src="../statics/logos/medium.svg"
                        class='navbar-icon'
                      >
                    </a>
                    <!-- REDDIT -->
                    &nbsp;&nbsp;
                    <a
                      href="https://www.reddit.com/user/msolomon4"
                      target="_blank"
                    >
                      <img
                        alt="Reddit"
                        src="../statics/logos/reddit.svg"
                        class='navbar-icon'
                      >
                    </a>
                  </ul>
                </div>
              </q-item-section>
            </q-item>

          </q-list>
        </q-drawer>
      </q-toolbar>
      <!-- END HEADER TOOLBAR -->
    </q-header>
    <br>
    <!-- END HEADER -->
    <q-page-container class="all-content-format">
      <!--
      Here it's where Vue Router injects children
      Page components.

      <router-view/> tag below can be replaced by an
      actual page content should you wish to do so.
      -->
      <router-view />
      <!--
      First child of QPageContainer must be a QPage,
      so make sure that your layout route children components
      encapsulate a QPage.
      -->
    </q-page-container>

    <!-- =================================================================== -->
    <!--                             FOOTER                                  -->
    <!-- =================================================================== -->
    <q-footer
      bordered
      class="row footer"
    >
      <q-toolbar class="row justify-between all-content-format">
        <div class="col-auto">
          <a
            href="mailto:matt@mattsolomon.dev"
            class="email-address vertical-center footer-font"
          >
            matt@mattsolomon.dev
          </a>
        </div>
        <div class="col-auto">
          <ul>
            <!-- LINKEDIN -->
            <a
              href="https://www.linkedin.com/in/msolomon4/"
              target="_blank"
            >
              <img
                alt="LinkedIn"
                src="../statics/logos/linkedin.svg"
                width="20rem"
                class='footer-icon-invert'
              >
            </a>
            <!-- GITHUB -->
            &nbsp;&nbsp;
            <a
              href="https://github.com/mds1"
              target="_blank"
            >
              <img
                alt="GitHub"
                src="../statics/logos/github.svg"
                width="20rem"
                class='footer-icon-invert'
              >
            </a>
            <!-- TWITTER -->
            &nbsp;&nbsp;
            <a
              href="https://twitter.com/msolomon44"
              target="_blank"
            >
              <img
                alt="Twitter"
                src="../statics/logos/twitter.svg"
                width="20rem"
                class='footer-icon-invert'
              >
            </a>
            <!-- MEDIUM -->
            &nbsp;&nbsp;
            <a
              href="https://medium.com/@msolomon44"
              target="_blank"
            >
              <img
                alt="Medium"
                src="../statics/logos/medium.svg"
                width="20rem"
                class='footer-icon-invert'
              >
            </a>
            <!-- REDDIT -->
            &nbsp;&nbsp;
            <a
              href="https://www.reddit.com/user/msolomon4"
              target="_blank"
            >
              <img
                alt="Reddit"
                src="../statics/logos/reddit.svg"
                width="20rem"
                class='footer-icon-invert'
              >
            </a>
          </ul>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'BaseLayout',
  data() {
    return {
      rightDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style lang='stylus' scoped>
// =============================================================================
// HEADER
// =============================================================================

// menu button
.menu-button {
  color: $darktext;
}

// for router link
.no-text-decoration, a:link {
  text-decoration: none;
  color: $darktext;
}

// split header into left and right halves
// source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#Using_auto_margins_for_main_axis_alignment
.float-to-left {
  margin-right: auto;
}

.float-to-right {
  margin-left: auto;
}

// set formatting of active page
.q-router-link--active, .active-page {
  font-weight: bold;
  color: $darktext;
}

.nav {
  display: inline-block; // ensures items do not stack
  margin-left: 1 rem;
  margin-right: 1 rem;
  color: $darktext;
}

// Title and subtitle
.header--title {
  font-size: 1.75rem;
  font-weight: bold;
}

.header--subtitle {
  font-size: 1.25rem;
  font-weight: normal;
}

// Social media icon formatting ----------------
.navbar-icons {
  margin-top: 3%;
  margin-bottom: 3%;
}

.navbar-icon {
  width: 1.25rem;
}

.navbar-icons ul {
  list-style: none;
  padding-left: 0;
}

// =============================================================================
// FOOTER
// =============================================================================
// for email in footer
.email-address {
  text-decoration: none;
  color: $lighttext !important;
}

.footer {
  font-size: 1rem;
  background: $accent;
}

.footer-font {
  color: $lighttext;
}

// Format social media icons
.footer-icon-invert {
  // width: 1.5rem;
  // Invert SVG icons since we have a dark background
  // Source: https://stackoverflow.com/questions/13325798/invert-colors-of-an-image-in-css-or-javascript
  -webkit-filter: invert(1);
  filter: invert(1);
}

footer ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
