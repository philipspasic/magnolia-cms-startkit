<template>
  <header class="page-header" :class="{'position-relative' : isMgnl}">
    <v-container>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col cols="3" class="page-header__start">
          <nuxt-link to="/" class="logo">
            <img :src="logoUrl" alt="logo">
          </nuxt-link>
        </v-col>
        <v-col cols="auto" class="page-header__center">
          <nav class="nav text-body-1">
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>
            </ul>
          </nav>
        </v-col>
        <v-col cols="3" class="page-header__end d-flex align-center justify-end">
          <v-btn 
            v-if="button && (button?.type.field === 'url' && button?.type.url) || (button?.type.field === 'link' && button?.type.link)"
            variant="outlined" 
            color="black" 
            :href="button.type.field === 'url' && button.type.url || ''"
            :target="button.type.field === 'url' ? '_blank' : ''"
            :to="button.type.field === 'link' && button.type.link || ''" 
            :nuxt="button.type.field === 'link'">{{ button.label || 'Button' }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import { EditorContextHelper } from '@magnolia/vue-editor';
import { onMounted } from 'vue';

export default {
  name: "PageHeader",
  props: [
    "logo",
    "button"
  ],
  setup(props) {
    let isMgnl = ref(false);
    const logoUrl = useMgnlImage(props.logo);

    onMounted(() => {
      isMgnl.value = EditorContextHelper.inIframe();
    });

    return {logoUrl, isMgnl};
  }
};
</script>

<style lang="scss">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: white;
  box-shadow: 0 0 17px 2px rgba(0,0,0,0.2);

  .v-container {
    padding: 8px 16px;
  }

  .logo {
    display: inline-block;

    img {
      display: block;
      max-height: 3.5rem;
    }
  }

  .nav {
    ul {
      list-style-type: none !important;
      display: flex;
      align-items: center;
      
      li {
        &:not(:last-child) {
          margin-right: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;

          &.router-link-exact-active {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>