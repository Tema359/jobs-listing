<template>
  <div>
    <h1>Jobjs List</h1>

    <ul>
      <li v-for="job of jobs" :key="job.id">
        <JobCard :job-item="job" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url = 'https://608ea0bb0294cd001765d8a0.mockapi.io/api/jobs'
    const response = await $axios.get(url)
    const jobs = response.data
    return { jobs }
  },
  data() {
    return {
      jobs: [],
    }
  },
  async mounted() {
    const url = 'https://608ea0bb0294cd001765d8a0.mockapi.io/api/jobs'
    const response = await this.$axios.get(url)
    this.jobs = response.data
  },
}
</script>
