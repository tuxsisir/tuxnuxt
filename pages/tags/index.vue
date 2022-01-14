<template>
  <div>
    <h4 class="text-3xl text-center text-gray-400">
      Tag Cloud
    </h4>
    <hr class="my-4">
    <div class="grid grid-cols-6 gap-4">
      <div class="md:col-start-2 col-start-1 md:col-span-4 col-span-6">
        <div class="mt-5 text-center">
          <span
            v-for="(count, tag, tagKey) in countedTags"
            :key="tagKey"
            class="text-xs inline-block py-1 px-2 rounded text-gray-400
        last:mr-0 mr-1 mb-10"
            :style="count !== 1 ? 'font-size:' + (12 * count) + 'px' : `font-size: 30px;`"
          >
          <nuxt-link :to="`/tags/` + tag" class="hover:underline">#{{ tag }}<span class="text-sm">[{{count}}]</span></nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TuxTags',
  async asyncData ({ $content }) {
    const allTags = await $content('notes').only(['tags']).fetch()
    const merged = [].concat.apply([], allTags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    return { allTags, countedTags }
  }
}
</script>
