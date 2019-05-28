<template>
  <q-page padding>
    <!-- content -->
    <h2 class="center-text">Resources</h2>
    <p class="center-text">
      <i>This page is frequently updated...</i>
    </p>

    <!-- BEGIN RESOURCE LIST -->
    <!-- This is a VERY inefficient way of doing this, but it works for now ¯\_(ツ)_/¯ -->
    <!-- FOR EACH CATEGORY -->
    <div
      :key="category.text"
      v-for="category in categories"
      class="row"
    >
      <div class="list--list-item shadow-4 col-12">
        <div class="q-ma-lg">
          <!-- Display Category -->
          <h4><b>{{category.text}}</b></h4>
          <div class="negative-top-margin"></div>

          <!-- FOR EACH SUBCATEGORY -->
          <div
            :key="subcategory.id"
            v-for="subcategory in category.subcategories"
          >
            <!-- Display subcategory -->
            <h5>{{subcategory}}</h5>
            <div class="negative-top-margin"></div>

            <!-- FOR EACH RESOURCE -->
            <div
              :key="resource.id"
              v-for="resource in resources"
            >
              <div
                class="row inline justify-between"
                v-if="resource.category === category && resource.subcategory===subcategory"
              >
                <base-resource
                  :name="resource.name"
                  :description="resource.description"
                  :url="resource.url"
                />
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import BaseResource from 'components/BaseResource';
import { categories, resources } from 'components/resourceList';

export default {
  // name: 'PageName',
  data() {
    return {
      categories,
      resources,
    };
  },

  components: {
    BaseResource,
  },


};
</script>

<style lang="stylus" scoped>
.negative-top-margin {
  margin-top: -1rem;
}
</style>
