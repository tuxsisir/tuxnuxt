<template>
  <div>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <tux-alert :show-alert="showAlert" />
      </div>
    </div>
    <!--
    <div class="mb-5 text-center">
      <span
        v-for="(link, linkKey) in links"
        :key="`link.name` + linkKey"
        class="py-1 px-2 rounded text-blue-500 last:mr-0 mr-1 mb-2"
      >
        <nuxt-link v-if="!link.external" :to="link.to" class="lowercase underline">{{ link.name }}</nuxt-link>
        <a v-else :href="link.to" target="_blank" class="lowercase italic underline">{{ link.name }}</a>
      </span>
    </div>
    -->
    <div class="grid grid-cols-8 my-4">
      <div class="md:col-span-2 col-span-8">
        <div class="relative w-full h-44">
          <img
            :src="profileImgThumb.trace"
            class="object-cover w-fit mx-auto shadow hover:shadow-lg h-fit rounded-full h-44 w-44 absolute top-0 bottom-0 left-0 right-0"
          >

          <img
            ref="imageProfile"
            :src="profileImgThumb.src"
            class="object-cover w-fit mx-auto shadow hover:shadow-lg rounded-md h-fit h-44 w-44 rounded-full transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0"
            :class="imageLoad ? `opacity-100` : `opacity-0`"
            alt="Sisir Ghimire Chettri"
            @load="onProfileImageLoad"
          >
        </div>
        </image-wrapper>
      </div>
      <div class="md:col-span-6 col-span-8">
        <div class="p-3 mb-3 text-justify dark:text-gray-400">
          <p class="font-mono subpixel-antialiased leading-relaxed mb-3">
            Hi, Thank you for reaching out here.
          </p>
          <p class="mb-3 font-mono subpixel-antialiased leading-relaxed text-justify">
            I am <span class="font-bold">Sisir</span>, <span class="underline underline-wavy">Software Engineer</span> currently
            based in Canada. At present, I am going back to school to pursue degree in Data Analytics.
          </p>
          <!--
          <p class="font-mono subpixel-antialiased leading-relaxed text-justify mb-3">
            This is where I <span class="line-through">may</span> put my jibber-jabber writings to references and see backs. I hope that the things here would be of help for you too.
          </p>

          <p class="font-mono subpixel-antialiased leading-relaxed text-justify">
            If you want to know more about me,
            <nuxt-link class="bg-gradient-to-r from-cyan-400 to-blue-500 text-white" to="/about">
              click me.
            </nuxt-link>
          </p>
          -->
        </div>
      </div>
    </div>
    <div class="px-3">
      <div class="mb-5 text-center">
        <span
          v-for="(count, tag, tagKey) in countedTags"
          :key="tagKey"
          class="text-xs inline-block py-1 px-2 rounded text-gray-400
        last:mr-0 mr-1 mb-2"
          :style="count !== 1 ? 'font-size:' + (2 + 7 * count) + 'px' : `font-size: 15px;`"
        >
          <nuxt-link :to="`/tags/` + tag" class="hover:underline">#{{ tag }}</nuxt-link>
        </span>
      </div>
      <div v-for="(article, key) in allArticles" :key="key">
        <div class="flex">
          <div class="hover:text-white bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 text-blue-500 font-bold">
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
import TuxAlert from '@/components/TuxAlert'

// eslint-disable-next-line
import profileThumb from '!!image-trace-loader?color=#BDCDD4&background=#FFF!../assets/images/sisir.jpg'

export default {
  name: 'IndexPage',
  components: { TuxAlert },
  async asyncData ({ $content, params }) {
    const allArticles = await $content('notes').sortBy('date', 'desc')
      .where({ draft: false }).only(['tags', 'title', 'slug', 'date']).limit(10).fetch()
    const tags = await $content('notes').sortBy('date', 'desc').where({ draft: false }).only(['tags']).fetch()
    const merged = [].concat.apply([], tags.map(x => (x.tags)))
    const countedTags = {}
    for (const x in merged) {
      countedTags[merged[x]] = merged.filter(tag => tag === merged[x]).length
    }
    return { allArticles, countedTags }
  },
  data () {
    return {
      showAlert: false,
      profileImgThumb: profileThumb,
      links: [
        { name: 'About', to: '/about', external: false },
        { name: 'Vim Adventures', to: 'https://vim-adventures.com/', external: true },
        { name: 'Covid Updates', to: 'https://www.worldometers.info/coronavirus/country/canada/', external: true }
      ],
      imageLoad: false
    }
  },
  head () {
    return {
      title: 'Sisir Ghimire Chettri'
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toISOString().slice(0, 10)
    },
    onProfileImageLoad () {
      setTimeout(() => {
        this.imageLoad = true
      }, 1000)
    }
  }
}
</script>
