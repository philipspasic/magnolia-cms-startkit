<template>
  <section class="text-and-image">
    <v-container>
      <v-row align="center" justify="center" :class="{'flex-row-reverse' : isRight}">
        <v-col md="5" lg="4">
          <h3 class="text-h4 mb-5">{{ headline }}</h3>
          <div class="text-body-1" v-html="content"></div>
        </v-col>
        <v-col lg="1"></v-col>
        <v-col md="6" lg="4">
          <v-img
            class="bg-black"
            aspect-ratio=".75"
            cover
            :src="imageUrl"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "TextAndImage",
  props: [
    "orientation",
    "headline",
    "content",
    "image"
  ],
  setup(props) {
    const imageUrl = useMgnlImage(props.image);
    const isRight = props.orientation === "right";
    return {imageUrl, isRight};
  }
};
</script>

<style lang="scss">
  .text-and-image {
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