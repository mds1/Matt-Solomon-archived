<template>
  <q-page padding>
    <!-- content -->
    <h2 class="center-text">Resources</h2>
    <p class="center-text">
      <i>This page is a work in progress...</i>
    </p>

    <!-- BEGIN RESOURCE LIST -->
    <div
      :key="resource.id"
      v-for="resource in resources"
    >
      <!-- IF RESOURCE IS FIRST OF ITS CATEGORY, SHOW CATEGORY -->
      <div v-if="shouldShowCategory(resource.id, 'category')">
        <h4><b>{{resource.category.text}}</b></h4>
        <!-- Reduce spacing between header and first item -->
        <div class="negative-top-margin"></div>
      </div>
      <!-- IF RESOURCE IS FIRST OF ITS SUBCATEGORY, SHOW SUBCATEGORY -->
      <div v-if="shouldShowCategory(resource.id, 'subcategory')">
        <h5>{{resource.subcategory}}</h5>
        <!-- Reduce spacing between header and first item -->
        <div class="negative-top-margin"></div>
      </div>
      <!-- DISPLAY RESOURCES -->
      <div class="row inline justify-between">
        <base-resource
          :name="resource.name"
          :description="resource.description"
          :url="resource.url"
        />
      </div>
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
     * @param {string} 'category' to check category, 'subcategory', top check
     * subcategories
     * @returns {bool} whether or not to show the resource category
     */
    shouldShowCategory(id, type) {
      // Conditions when category should be shown
      //    1. This is the first resource
      //    2. The category of this resource differs from the category of the
      //       previous resource

      // Check category
      if (type === 'category') {
        if (
          id === 0
          || this.resources[id].category !== this.resources[id - 1].category
        ) {
          return true;
        }
        return false;
      }
      // Otherwise assume type equals subcategory
      if (
        id === 0
        || this.resources[id].subcategory !== this.resources[id - 1].subcategory
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
.negative-top-margin {
  margin-top: -1rem;
}
</style>
