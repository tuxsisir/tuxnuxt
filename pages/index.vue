<template>
  <div style="border:1px solid black;">
    <div class="p-3">
      <img
        class="object-cover h-48 w-96 mx-auto rounded-lg shadow-md"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      >
    </div>
    <div>
      #javascript, #django, #postgres, #database
    </div>
    <div v-for="(article, key) in allArticles" :key="key">
      {{ article.title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const allArticles = await $content('articles').fetch()
    return { allArticles }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
