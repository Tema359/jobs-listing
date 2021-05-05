<template>
  <v-app>
    <Navbar />
    <main class="main">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar },
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
hr {
  margin: 1rem 0;
}
strong {
  font-weight: 500;
}
ol,
p,
ul {
  line-height: 1.7;
}
a {
  font-weight: 500;
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.45;
}
h1 {
  font-size: 2.2rem;
  font-weight: 600;
}
h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
}
h3 {
  font-size: 1.35rem;
}
</style>
