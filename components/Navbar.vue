<template>
  <v-card>
    <v-app-bar color="#1c4248">
      <v-toolbar-title>Jobs Listing</v-toolbar-title>

      <v-spacer></v-spacer>
      <ul class="navbar">
        <li class="navbar__item">
          <nuxt-link to="/" active-class="active">Home</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/jobs" active-class="active">Jobs</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/post" active-class="active">Post a job</nuxt-link>
        </li>
      </ul>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  color: #fff;
}
.navbar {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-right: 70px;
  list-style: none;
  &__item a {
    color: #fff;
  }
}
</style>
