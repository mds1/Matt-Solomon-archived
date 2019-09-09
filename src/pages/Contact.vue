<template>
  <q-page padding>
    <h2 class="center-text">Contact</h2>
    <div class="row justify-center">
      <!-- Email -->
      <q-card
        bordered
        class="card--container text-center shadow-10 q-my-lg q-mx-lg"
      >

        <q-card-section>

          <q-list>
            <!-- Email -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  color="darktext"
                  name="fas fa-envelope"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a href="mailto:matt@mattsolomon.dev">Email matt@mattsolomon.dev</a>
              </q-item-section>
            </q-item>

            <!-- Twitter -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  class="twitter"
                  name="fab fa-twitter"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a
                  href="https://twitter.com/msolomon44"
                  target="_blank"
                >Follow or tweet at me</a>
              </q-item-section>
            </q-item>

            <!-- LinkedIn -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  class="linkedin"
                  name="fab fa-linkedin"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a
                  href="https://www.linkedin.com/in/msolomon4/"
                  target="_blank"
                >LinkedIn profile</a>
              </q-item-section>
            </q-item>

            <!-- GitHub -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  class="github"
                  name="fab fa-github"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a
                  href="https://github.com/mds1"
                  target="_blank"
                >GitHub profile</a>
              </q-item-section>
            </q-item>

            <!-- Reddit -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  class="reddit"
                  name="fab fa-reddit"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a
                  href="https://www.reddit.com/user/msolomon4"
                  target="_blank"
                >Reddit profile</a>
              </q-item-section>
            </q-item>

            <!-- Medium -->
            <q-item>
              <q-item-section avatar>
                <q-icon
                  class="medium"
                  name="fab fa-medium"
                />
              </q-item-section>

              <q-item-section class="text-left">
                <a
                  href="https://medium.com/@msolomon44"
                  target="_blank"
                >Medium profile</a>
              </q-item-section>
            </q-item>

          </q-list>
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="stylus" scoped>
a {
  text-decoration: none;
}

.card--container {
  max-width: 350px;
  width: 100%;
}

.card--header-icon {
  font-size: 0.75em;
  color: #bbb;
}

.email-button {
  text-decoration: none;
}

.negative-margin {
  margin-bottom: -0.5em;
}

.reddit {
  color: #FF4301;
}

.medium {
  color: #000000;
}

.github {
  color: #211F1F;
}

.linkedin {
  color: #0077B5;
}

.twitter {
  color: #1DA1F2;
}
</style>
