<template>
  <div>
    <div class="flex items-stretch mb-4 capitalize">
      <div class="mr-2">
        <nuxt-link :to="`/tags`" class="mr-1 hover:underline text-blue-500">
          Tags
        </nuxt-link>
        <span class="text-gray-400">
          &raquo;
        </span>
      </div>
      <div class="text-gray-400">
        {{ paramSlug }}
      </div>
    </div>
    <div class="grid grid-cols-6">
      <!--
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
      -->
      <div class="col-span-6 text-gray-400">
        <div v-for="(notes, ind) in filteredPosts" :key="ind">
          <nuxt-link :to="`/notes/` + notes.slug" class="hover:underline">
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
    const allTags = await $content('notes').where({ draft: false }).only(['tags', 'title']).fetch()
    const merged = [].concat.apply([], allTags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    const filteredPosts = await $content('notes').where(
      { tags: { $contains: params.slug }, draft: false }).only(['tags', 'title', 'slug']).fetch()
    return { filteredPosts, countedTags }
  },
  computed: {
    paramSlug () {
      return this.$route.params.slug
    }
  }
}
</script>
