<template>
  <section class="page-cover" :class="{'page-cover--page' : layout === 'page', 'page-cover--hero' : layout === 'hero'}">
    <v-img cover v-if="layout === 'page'" :src="imageUrl"></v-img>
    <v-parallax v-if="layout === 'hero'" :src="imageUrl"></v-parallax>
    <v-container class="d-flex h-100">
      <v-col lg="6" md="8" class="page-cover__content">
        <h1 class="text-lg-h2 text-h3 font-weight-thin" :class="{'mb-5' : content}">{{ headline }}</h1>
        <div v-if="content" class="text-body-1" v-html="content"></div>
      </v-col>
    </v-container>
  </section>
</template>

<script>
import { useMgnlImage } from '../composables/mgnlImage';

export default {
  name: "Cover",
  props: [
    "layout",
    "headline",
    "content",
    "image"
  ],
  setup(props) {
    const imageUrl = useMgnlImage(props.image);
    return {imageUrl};
  }
};
</script>

<style lang="scss">
.page-cover {
  position: relative;
  background-color: rgba(black, .2);
  color: white;
  z-index: 2;
  height: 60vh;
  overflow: hidden;
  margin-bottom: 5rem !important;

  .v-parallax, .v-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, .2);
    pointer-events: none;
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;

    p:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  &--page {
    .v-container {
      align-items: end;
      padding-bottom: 48px;
    }
  }

  &--hero {
    height: 100vh;
    text-align: center;

    .v-container {
      align-items: center;
      justify-content: center;
    }
  }
}
</style>