<template>
  <q-page padding>
    <!-- content -->
    <h2 class="center-text">Blockchain</h2>
    <p class="center-text">
      <i>This page is a work in progress...</i>
    </p>
    <p>
      A list of past projects is shown below
    </p>
    <ul>
      <li>For source code, click the GitHub logo next to the project title</li>
      <li>For a hosted version of the project, click the image shown</li>
    </ul>

    <div
      :key="project.id"
      v-for="project in projects"
    >

      <base-project :project=project />
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
