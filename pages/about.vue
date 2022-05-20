<template>
  <div class="grid grid-cols-8 gap-4">
    <div class="md:col-span-3 col-span-8">
      <h4 class="text-xl text-gray-400 mb-3">
        Recent Playlist
      </h4>
      <iframe
        src="https://open.spotify.com/embed/playlist/5JZLvzZedV2C3gCBugWNRF?utm_source=generator"
        height="480"
        frameBorder="0"
        allowfullscreen=""
        class="rounded-md"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
    <div class="md:col-span-5 col-span-8 text-gray-400">
      <p>
        Thanks for coming here. I am working on it.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
