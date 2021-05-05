<template>
  <div>
    <h1>{{ pageTitle }}</h1>

    <ul class="cards-list">
      <li v-for="job of historyList" :key="job.id" class="cards-list__item">
        <JobCard :job-item="job" />
      </li>
    </ul>
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="7"
      @input="updatePage"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Jobs List',
      page: 1,
      pageSize: 5,
      listCount: 0,
      historyList: [],
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
    pages() {
      const _this = this
      if (_this.pageSize == null || _this.listCount == null) return 0
      return Math.ceil(_this.listCount / _this.pageSize)
    },
  },
  created() {
    const _this = this
    _this.initPage()
    _this.updatePage(_this.page)
  },
  methods: {
    initPage() {
      const _this = this
      _this.listCount = _this.jobs.length
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.jobs
      } else {
        _this.historyList = _this.jobs.slice(0, _this.pageSize)
      }
    },
    updatePage(pageIndex) {
      const _this = this
      const _start = (pageIndex - 1) * _this.pageSize
      const _end = pageIndex * _this.pageSize
      _this.historyList = _this.jobs.slice(_start, _end)
      _this.page = pageIndex
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
