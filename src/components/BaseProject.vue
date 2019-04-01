<template>
  <div>
    <div class="row items-center">
      <!-- ================================================================= -->
      <!--                          HEADER ROW                               -->
      <!-- ================================================================= -->
      <!-- Project title -->
      <h4>
        <b>{{project.name}}</b>
      </h4>

      <!-- GitHub Link -->
      <a
        :href="project.urlGit"
        target="_blank"
      >
        <img
          src="statics/logos/github.svg"
          class="float-left q-ml-sm"
          height="25rem"
        />
      </a>
    </div>
    <!-- =================================================================== -->
    <!--                            MAIN CONTENT                             -->
    <!-- =================================================================== -->
    <!-- Description -->
    <p
      v-html="project.description"
      class="negative-top-margin"
    ></p>
    <!-- Tools -->
    <div class="row justify-between">
      <div class="col-xs-12 col-sm-4">
        <p>Built with:</p>
        <div
          v-for="(tool, index) in project.tools"
          :key="index"
        >
          <ul>
            <li class='reduce-li-spacing'>
              <a
                :href="tool.url"
                target="_blank"
              >
                {{tool.name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Project picture -->
      <div class="col-xs-12 col-sm-8">
        <a
          :href="project.urlHome"
          target="_blank"
        >
          <q-img src="statics/projects/blockchain/survivor.png" /></a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BaseProject',
  data() {
    return {};
  },
  props: {
    /**
     * Required fields for the `project` prop are defined in
     * `blockchainProjectList.js`. These fields are name, description, tools,
     * urlGit, urlHome, and showIf
     */
    project: {
      type: Object,
      required: true,
      default: undefined,
    },
  },

};
</script>
