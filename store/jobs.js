export const state = () => ({
  jobs: [],
})

export const mutations = {
  addJobs(state, newJob) {
    state.jobs.unshift(newJob)
  },
  setJobs(state, jobs) {
    state.jobs = jobs
  },
}

export const actions = {
  async fetchJobsList({ commit }) {
    try {
      const response = await this.$axios.get(
        'https://608ea0bb0294cd001765d8a0.mockapi.io/api/jobs'
      )
      const jobs = response.data
      jobs.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      )
      jobs.forEach((job) => {
        let date = new Date(job.createdDate)
        if (date.getDate() < 10 && date.getMonth() < 10) {
          date = `0${date.getDate()}/0${
            date.getMonth() + 1
          }/${date.getFullYear()}`
          job.createdDate = date
        } else {
          date = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`
          job.createdDate = date
        }
      })
      commit('setJobs', jobs)
    } catch (error) {
      location.href = '/'
    }
  },
}

export const getters = {
  jobs: (state) => state.jobs,
}
