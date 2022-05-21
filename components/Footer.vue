<template>
  <div>
    <div class="border-t-2 border-gray-300 dark:border-gray-700 text-sm text-gray-600 mt-6 py-6 transition ease-linear duration-200">
      Copyright SGC &copy; {{ year }} ~
      Built with <a href="https://nuxtjs.org/" class="hover:underline" target="_blank">NuxtJS</a>,
      <a href="https://tailwindcss.com/" class="hover:underline" target="_blank">Tailwind CSS</a>, <a
        href="https://pages.github.com/"
        class="hover:underline"
        target="_blank"
      >Github Pages</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: 2020 // start of the publication
    }
  }
}
</script>
