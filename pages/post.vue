<template>
  <div>
    <h1>Add new job</h1>
    <div class="job-form">
      <v-text-field
        v-model="nameCompany"
        :rules="[rules.required, rules.counter]"
        placeholder="Company name"
        @input="companyName"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :placeholder="placeholder"
        :rules="[rules.required, rules.counter]"
        @input="jobTitle"
      >
      </v-text-field>
      <v-select
        outlined
        :items="items"
        placeholder="Job Type"
        @change="jobType"
      ></v-select>
      <v-textarea
        v-model="textArea"
        outlined
        :rules="[rules.required, rules.counter]"
        placeholder="Job Description"
        @change="jobDescription"
      ></v-textarea>
      <v-text-field
        :rules="[rules.required]"
        placeholder="Job salary"
        type="number"
        @input="jobSalary"
      ></v-text-field>
      <v-text-field
        v-model="country"
        :rules="[rules.required, rules.counter]"
        placeholder="County"
        @input="jobCountry"
      ></v-text-field>
      <v-text-field
        v-model="city"
        :rules="[rules.required, rules.counter]"
        placeholder="City"
        @input="jobCity"
      ></v-text-field>
      <nuxt-link to="/jobs">
        <v-btn
          :disabled="city.trim().length < 5"
          color="primary"
          @click="postJob"
          >Post Job
        </v-btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'Job title',
      newJob: {},
      nameCompany: '',
      title: '',
      textArea: '',
      country: '',
      city: '',
      items: ['Director', 'Producer', 'Coordinator', 'Officer', 'Associate'],
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) =>
          value.trim().length > 4 || 'Please enter enough symbols',
      },
    }
  },
  async fetch({ store }) {
    await store.dispatch('jobs/fetchJobsList')
  },
  computed: {
    jobs() {
      return this.$store.getters['jobs/jobs']
    },
  },
  methods: {
    companyName(inputValue) {
      this.newJob.companyName = inputValue
    },
    jobTitle(inputValue) {
      this.newJob.jobTitle = inputValue
    },
    jobType(selectValue) {
      this.newJob.jobType = selectValue
    },
    jobDescription(textAreaValue) {
      this.newJob.jobDescription = textAreaValue
    },
    jobSalary(salaryValue) {
      this.newJob.salary = +salaryValue
    },
    jobCountry(countryValue) {
      this.newJob.country = countryValue
    },
    jobCity(cityValue) {
      this.newJob.city = cityValue
    },
    postJob() {
      try {
        this.newJob.id = this.jobs.length + 1
        let date = new Date()
        if (date.getDate() < 10 && date.getMonth() < 10) {
          date = `0${date.getDate()}/0${
            date.getMonth() + 1
          }/${date.getFullYear()}`
          this.newJob.createdDate = date
        } else {
          date = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`
          this.newJob.createdDate = date
        }
        this.$store.commit('jobs/addJobs', this.newJob)
        this.$axios.post(
          'https://608ea0bb0294cd001765d8a0.mockapi.io/api/jobs',
          this.newJob
        )
      } catch (error) {
        location.href = '/jobs'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.job-form {
  max-width: 600px;
  margin: 0 auto;
  .v-btn {
    margin-top: 40px;
  }
}
</style>
