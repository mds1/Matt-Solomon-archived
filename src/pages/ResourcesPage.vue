<template>
  <q-page padding>
    <!-- content -->
    <h2 class="center-text">Resources</h2>
    <p class="center-text">
      <i>This page is a work in progress...</i>
    </p>

    <!-- BEGIN RESOURCE LIST -->
    <!-- Use v-for to list all questions used for calculating a budget-->
    <div :key="resource.id" v-for="resource in resources">
      <!-- IF RESOURCE IS FIRST OF ITS CATEGORY, SHOW CATEGORY -->
      <div v-if="shouldShowCategory(resource.id)">
        <h3>{{resource.category.text}}</h3>
        <h4>{{resource.subcategory}}</h4>
      </div>
      <!-- DISPLAY RESOURCES -->
      <!-- Inputs use a dynamic v-model name -->
      <!-- See: https://stackoverflow.com/q/43364487/10152004 -->
      <div class="row inline justify-between">
        <base-resource
          :name="resource.name"
          :description="resource.description"
          :url="resource.url"
        />
      </div>
      <!-- COLLAPSIBLE (TODO): Contains addition info/details -->
      <!-- Place collapsible here -->
    </div>
  </q-page>
</template>

<script>
import BaseResource from 'components/BaseResource';
import { resources } from 'components/resourceList';

export default {
  // name: 'PageName',
  data() {
    return {
      resources,
    };
  },

  components: {
    BaseResource,
  },

  methods: {
    /**
     * Determines whether or not the resource category should be displayed for
     * a given resource. The resource array must be sorted by category. If a
     * resource is the first of it's category, the category should be displayd,
     * acting as a section separator
     * @param {integer} id resource id number
     * @returns {bool} whether or not to show the resource category
     */
    shouldShowCategory(id) {
      // Conditions when category should be shown
      //    1. This is the first resource
      //    2. The category of this resource differs from the category of the
      //       previous resource
      if (
        id === 0
        || this.resources[id].category !== this.resources[id - 1].category
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>
