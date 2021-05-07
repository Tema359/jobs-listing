<template>
  <v-card class="mx-auto" width="630">
    <v-card-title
      >{{ jobItem.jobTitle }} -
      <span class="company-name">{{ jobItem.companyName }} </span>
    </v-card-title>
    <v-card-subtitle>{{ jobItem.createdDate }}</v-card-subtitle>
    <div class="job-description">
      <span class="job-description__type">{{ jobType }}</span>
      <span class="job-description__type">{{ jobItem.jobType }}</span>
      <v-avatar color="#1c4348">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn class="btn-details" color="#1c4248" @click="show = !show"
        >{{ show ? 'Hide Details' : 'View  Details' }}
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          <p class="job-description__country">Country: {{ jobItem.country }}</p>
          <p class="job-description__city">City: {{ jobItem.city }}</p>
          <span v-if="jobItem.jobArea" class="job-description__area">{{
            jobItem.jobArea
          }}</span>
          <span class="job-description__area">{{
            jobItem.jobDescription
          }}</span>
          <p class="job-description__text">{{ jobDescText }}</p>
          <p class="job-description__salary"
            >Salary: ${{
              parseFloat(jobItem.salary.toString().slice(0, 2)) - 10
            }}K - ${{
              parseFloat(jobItem.salary.toString().slice(0, 2)) + 25
            }}K</p
          >
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
      jobType: 'Full Time',
      jobDescText:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis fuga ducimus quisquam maiores blanditiis doloribus cupiditate illo animi iure.',
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.company-name {
  margin-left: 10px;
  font-weight: 400;
  color: gray;
}
.job-description {
  margin-left: 17px;
  &__type,
  &__area {
    background: #686e6f;
    padding: 5px;
    border-radius: 2px;
    color: #fff;
  }
  &__area {
    background: #4e79de;
  }
  &__text {
    margin-top: 20px;
  }
  &__salary {
    color: red;
  }
}
.v-avatar {
  float: right;
  margin: 0 30px -20px 0;
}
.v-btn__content {
  color: #fff;
}
.btn-details {
  margin: 20px 0 15px 8px;
}
</style>
