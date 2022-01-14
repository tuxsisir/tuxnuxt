<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="col-span-2">
        <h3 class="font-bold mt-3 mb-3">
          <nuxt-link class="hover:underline" to="/tags">
            All Tags
          </nuxt-link>
        </h3>
        <div
          v-for="(count, tag, tagKey) in countedTags"
          :key="tagKey"
          class="italic"
        >
          <nuxt-link :to="`/tags/` + tag" class="underline">
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
      <div class="col-span-4">
        <h3 class="article-heading font-bold">
          Notes
        </h3>
        <div v-for="(notes, ind) in filteredPosts" :key="ind">
          <nuxt-link :to="`/notes/` + notes.slug">
            {{ notes.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TuxTags',
  async asyncData ({ $content, params }) {
    const allTags = await $content('notes').only(['tags', 'title']).fetch()
    const merged = [].concat.apply([], allTags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    const filteredPosts = await $content('notes').where({ tags: { $contains: params.slug } }).only(['tags', 'title', 'slug']).fetch()
    return { filteredPosts, countedTags }
  }
}
</script>
<style>
.article-heading {
  margin: 0.75rem 0 0 0 !important;
}
</style>
