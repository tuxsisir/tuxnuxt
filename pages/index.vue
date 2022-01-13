<template>
  <div>
    <div class="p-3 mb-3 text-justify">
      <p class="font-mono subpixel-antialiased leading-relaxed">
        Hi, Thank you for reaching out here.
      </p>

      <p class="mb-3 font-mono subpixel-antialiased leading-relaxed text-justify">
      I am <span class="font-bold">Sisir</span>, <span class="tux-underline">Software Developer</span> currently
        based in Metro Vancouver, BC originally from Nepal. At present, I am going back to school to pursue degree in Data Analytics.
      </p>
      <p class="font-mono subpixel-antialiased leading-relaxed text-justify mb-3">
        This is where I may put my jibber-jabber writings to references and see backs. I hope that the things here would be of help for you too.
      </p>

      <p class="font-mono subpixel-antialiased leading-relaxed text-justify">
        If you want to know more about me,
        <nuxt-link class="text-blue-500" to="/about">
          click here
        </nuxt-link>.
      </p>
      <!--
      <img
        class="object-cover h-48 w-9/12 mx-auto rounded-lg shadow-md"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      >
      -->
    </div>
    <div class="px-3">
      <div class="font-bold mb-0">
        { Tags }
      </div>
      <div class="mb-3">
        ======
      </div>
      <div class="mb-5 text-center">
        <span
          v-for="(count, tag, tagKey) in countedTags"
          :key="tagKey"
          class="text-xs inline-block py-1 px-2 rounded text-blue-500
        last:mr-0 mr-1 mb-2"
          :style="'font-size:' + (2 + 7 * count) + 'px'"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="font-bold mb-0">
        { Self Notes }
      </div>
      <div class="mb-3">
        ===========
      </div>
      <div v-for="(article, key) in allArticles" :key="key">
        <div class="flex">
          <div class="w-32">
            [ {{ formatDate(article.date) }} ]
          </div>
          <div class="hover:text-white hover:bg-blue-500 text-blue-500 font-bold">
            <nuxt-link :to="'/notes/' + article.slug">
              {{ article.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const allArticles = await $content('notes').sortBy('date', 'desc').fetch()
    const tags = await $content('notes').sortBy('date', 'desc').only(['tags']).fetch()
    const merged = [].concat.apply([], tags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    return { allArticles, countedTags }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toISOString().slice(0, 10)
    }
  }
}
</script>

<style>
.tux-underline {
  text-decoration: underline solid #efefef 4px;
}
</style>
