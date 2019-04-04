<template>
  <q-layout
    class="background-image"
    view="hhh Lpr fff"
  >
    <!-- =================================================================== -->
    <!--                             HEADER                                  -->
    <!-- =================================================================== -->
    <q-header class="flat header">
      <q-toolbar class="all-content-format">
        <!-- 1: SITE LOGO -->
        <router-link
          class="no-text-decoration"
          to="/"
        >
          <img
            src="statics/favicons/main-404x404.jpeg"
            height="40 rem"
            class="q-mr-sm"
            style="border-radius: 50%;"
          >
        </router-link>

        <!-- 2: SITE NAME/SUBTITLE -->
        <router-link
          class="no-text-decoration end-left-side"
          to="/"
        >
          <q-toolbar-title>Matt Solomon
            <div slot="subtitle">Blockchain and automation</div>
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
          class="begin-right-side lt-sm menu-button"
          outline
        >
          <!-- <q-icon name="fas fa-bars"/> -->
          Menu
        </q-btn>

        <!-- 3B. MENU ITEMS (for large screens) -->
        <ul class="gt-xs">
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
          <router-link
            :to="{ name: 'blockchain' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Blockchain</a>
          </router-link>

          <!-- AUTOMATION -->
          <router-link
            :to="{ name: 'automation' }"
            active-class="active-page"
            class="no-text-decoration nav"
          >
            <a>Automation</a>
          </router-link>

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
              separator
            >
              <q-item-section>Home</q-item-section>
            </q-item>

            <!-- ITEM: Blockchain -->
            <q-item
              :to="{ name: 'blockchain' }"
              separator
            >
              <q-item-section>Blockckain</q-item-section>
            </q-item>

            <!-- ITEM: Automation -->
            <q-item
              :to="{ name: 'automation' }"
              separator
            >
              <q-item-section>Automation</q-item-section>
            </q-item>

            <!-- ITEM: Blog -->
            <q-item
              :to="{ name: 'blog' }"
              separator
            >
              <q-item-section>Blog</q-item-section>
            </q-item>

            <!-- ITEM: Resources -->
            <q-item
              :to="{ name: 'resources' }"
              separator
            >
              <q-item-section>Resources</q-item-section>
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
      class="footer"
    >
      <q-toolbar class="all-content-format">
        <p class="vertical-center end-left-side footer-font">matt@mattsolomon.dev</p>
        <ul class="gt-xs begin-right-side">
          <!-- LINKEDIN -->
          <a
            href="https://www.linkedin.com/in/msolomon4/"
            target="_blank"
          >
            <img
              alt="LinkedIn"
              src="../statics/logos/linkedin.svg"
              width="25rem"
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
              width="25rem"
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
              width="25rem"
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
              width="25rem"
            >
          </a>
        </ul>
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
@import '~quasar-variables';

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
.end-left-side {
  margin-right: auto;
}

.begin-right-side {
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
}

.footer {
  font-size: 1rem;
  background: $accent;
}

.footer-font {
  color: $lighttext;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

// Format social media icons
ul img {
  // width: 1.5rem;
  // Invert SVG icons since we have a dark background
  // Source: https://stackoverflow.com/questions/13325798/invert-colors-of-an-image-in-css-or-javascript
  -webkit-filter: invert(1);
  filter: invert(1);
}
</style>
