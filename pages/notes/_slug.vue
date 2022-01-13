<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <h3 class="font-bold mt-3">
        Table of Contents
      </h3>
      <div v-if="post.toc.length > 0">
        <div v-for="(header, headKey) in post.toc" :key="headKey">
          <a :href="`#` + header.id" class="hover:underline">{{ header.text }}</a>
        </div>
      </div>
      <div v-else class="my-3">
        Niente!
      </div>
    </div>
    <div class="col-span-6">
      <article class="prose max-w-none">
        <h3 class="article-heading font-bold">
          {{ post.title }}
        </h3>
        <span> {{ formatDate(post.date) }}</span> | <span>{{ post.title }}</span>
        <hr class="custom-hr">
        <nuxt-content :document="post" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('notes', params.slug).fetch()

    const [prev, next] = await $content('notes')
      .only(['title', 'description'])
      .sortBy('title', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toISOString().slice(0, 10)
    }
  }
}
</script>
<style>
.custom-hr {
  margin: 0.4rem 0px !important;
}
.article-heading {
  margin: 0.75rem 0 0 0 !important;
}
</style>
