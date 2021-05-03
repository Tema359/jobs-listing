<template>
  <section class="section-error">
    <h1 v-if="error.statusCode === 404" class="error-title">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="error-title">
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
.section-error {
  width: 600px;
  margin: 0 auto;
  padding-top: 5rem;
}
.error-title {
  font-size: 20px;
  color: red;
}
</style>
