<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <h3 class="mt-8 font-bold">Table of Contents</h3>
    </div>
    <div class="col-span-6">
      <article class="prose max-w-none">
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
  }
}
</script>
