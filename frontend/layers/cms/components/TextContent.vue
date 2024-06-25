<template>
  <section class="text-content">
    <v-container>
      <v-row justify="center">
        <v-col lg="8">
          <h2 class="text-h3 mb-5" v-if="headline">{{ headline }}</h2>
          <div class="text-body-1" v-html="content"></div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: [
    "headline",
    "content"
  ]
};
</script>

<style lang="scss">
  .text-content {
    .text-body-1 {
      p:not(:last-child) {
        margin-bottom: 1em;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 1.5em 0 1em;
      }
    }
  }
</style>
