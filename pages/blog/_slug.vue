<template>
  <article class="prose prose-slate">
    <nuxt-content :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'description'])
      .sortBy('title', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      post,
      prev,
      next
    }
  }
}
</script>
