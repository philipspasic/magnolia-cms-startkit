<template>
  <footer class="page-footer">
    <div class="bg-teal">
      <v-container class="d-flex align-center">
        <p>Get connected with us on social networks!</p>

        <v-spacer></v-spacer>

        <v-btn
          v-for="social in socials"
          :key="social.icon"
          class="mx-3"
          :href="social.href"
          target="_blank"
          rel="nofollow"
          :icon="social.icon"
          variant="plain"></v-btn>
      </v-container>
    </div>

    <div class="bg-black text-white text-center">
      <v-container>
        <p class="text-body-2">© {{ new Date().getFullYear() }} Company</p>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  data: () => ({
    socials: [
      {
        href: "https://www.facebook.com",
        icon: "mdi-facebook"
      },
      {
        href: "https://www.twitter.com",
        icon: "mdi-twitter"
      },
      {
        href: "https://www.linkedin.com",
        icon: "mdi-linkedin"
      },
      {
        href: "https://www.instagram.com",
        icon: "mdi-instagram"
      }
    ],
  }),
};
</script>

<style lang="scss">
.page-footer {
  margin-top: 5rem;
}
</style>