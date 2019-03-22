<template>
  <div>
    <a :href="this.url" class="no-text-decoration" target="_blank">
      <q-item>
        <q-item-section>
          <q-item-label>{{this.name}}</q-item-label>
          <q-item-label caption>{{this.description}}</q-item-label>
        </q-item-section>
      </q-item>
    </a>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  },

  props: {
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="stylus" scoped>
.item-label-header {
  font-size: 10rem !important;
}
</style>
