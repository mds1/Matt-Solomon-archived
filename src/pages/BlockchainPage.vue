<template>
  <q-page padding>
    <!-- content -->
    <h2 class="center-text">Blockchain</h2>
    <p class="center-text">
      <i>This page is a work in progress...</i>
    </p>

    <div
      :key="project.id"
      v-for="project in projects"
    >

      <base-project />
    </div>

  </q-page>
</template>

<script>
import BaseProject from 'components/BaseProject.vue';
import { projects } from 'components/blockchainProjectsList';

export default {
  name: 'BlockchainPage',
  components: {
    BaseProject,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style>
</style>
