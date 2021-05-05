<template>
  <v-card class="mx-auto" width="600">
    <v-card-title
      >{{ jobItem.jobTitle }}
      <span class="company-name"> {{ jobItem.companyName }} </span>
    </v-card-title>

    <v-card-subtitle>{{ jobItem.createdDate }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="#1c4248" @click="show = !show"
        >{{ show ? 'Hide Details' : 'View  Details' }}
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    jobItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
      changeText: false,
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.company-name {
  color: gray;
}
.v-btn__content {
  color: #fff;
}
</style>
