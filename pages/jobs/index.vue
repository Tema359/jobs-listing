<template>
  <div>
    <h1>{{ pageTitle }}</h1>

    <ul class="cards-list">
      <li v-for="job of jobs" :key="job.id" class="cards-list__item">
        <JobCard :job-item="job" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Jobjs List',
    }
  },
  async fetch({ store }) {
    if (store.getters['jobs/jobs'].length === 0) {
      await store.dispatch('jobs/fetchJobsList')
    }
  },
  computed: {
    jobs() {
      return this.$store.getters['jobs/jobs']
    },
  },
}
</script>

<style lang="scss">
.cards-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  &__item {
    margin-bottom: 40px;
  }
}
</style>
