<template>
  <div class="grid grid-cols-8 gap-8">
    <!--
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
    -->
    <div class="md:col-span-8 col-span-8">
      <h2 class="text-2xl text-gray-400 font-bold mb-2">
        {{ post.title }}
      </h2>
      <article class="prose dark:prose-dark max-w-none">
        <div class="text-xs">
          <span class="italic">Created:</span> {{ formatDate(post.date) }}
        </div>
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
