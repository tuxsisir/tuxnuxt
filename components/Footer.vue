<template>
  <div>
    <div class="site-footer text-sm text-gray-600">
      Copyleft SGC <span class="copyleft">&copy;</span> {{ currentYear }} ~
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
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
<style>
.site-footer {
  left: 0;
  right: 0;
  height: 70px;
  padding: 1rem 0rem;
  border-top: 2px solid #efefef;
  margin-top: 1.5rem;
}
.copyleft {
  display:inline-block;
  transform: rotate(180deg);
}
</style>
