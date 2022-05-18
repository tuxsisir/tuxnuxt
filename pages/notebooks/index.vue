<template>
  <div>
    Notebooks Index
    <div v-for="(article, key) in allArticles" :key="key">
      <div class="flex">
        <div class="hover:text-white bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 text-blue-500 font-bold">
          <nuxt-link :to="'/notebooks/' + article.slug">
            {{ article.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const allArticles = await $content('notes/notebooks').sortBy('date', 'desc')
      .where({ draft: false }).only(['tags', 'title', 'slug', 'date']).limit(10).fetch()
    const tags = await $content('notes/notebooks').sortBy('date', 'desc').where({ draft: false }).only(['tags']).fetch()
    const merged = [].concat.apply([], tags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    return { allArticles, countedTags }
  },
  data () {
    return {
      showAlert: false
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toISOString().slice(0, 10)
    }
  }
}
</script>
