<template>
  <div class="grid grid-cols-8 gap-8">
    this is details of notebooks
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
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('notes/notebooks', params.slug).fetch()

    const [prev, next] = await $content('notes/notebooks')
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
