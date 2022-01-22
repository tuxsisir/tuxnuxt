<template>
  <div class="grid grid-cols-8 gap-8">
    <div class="md:col-span-2 col-span-8">
      <h3 class="font-bold mt-3">
        Table of Contents
      </h3>
      <div v-if="post.toc.length > 0">
        <div v-for="(header, headKey) in post.toc" :key="headKey" class="flex">
          <div class="mr-2">
            &raquo;
          </div>
          <div>
            <a :href="`#` + header.id" class="hover:underline text-slate-400">{{ header.text }}</a>
          </div>
        </div>
      </div>
      <div v-else class="my-3">
        Niente!
      </div>
    </div>
    <div class="md:col-span-6 col-span-8">
      <article class="prose max-w-none">
        <h3 class="article-heading font-bold">
          {{ post.title }}
        </h3>
        <div class="text-xs">
          <font-awesome-icon :icon="['fa', 'calendar']" /> {{ formatDate(post.date) }}
        </div>
        <hr class="custom-hr">
        <nuxt-content :document="post" />
      </article>
      <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 text-xs" role="alert">
        <p class="font-bold mb-2">
          #JLUK
        </p>
        <p>These contents are curated and may or may not be complete as I write them for later references.</p>
        Last Updated: <span class="">{{ formatDate(post.updatedAt) }}</span>
      </div>
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
