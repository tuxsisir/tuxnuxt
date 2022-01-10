<template>
  <div>
    <div class="site-footer">
      Designed By Sisir Ghimire Chettri
      ~ Copyleft SGC <span class="copyleft">&copy;</span> {{ currentYear }} ~
      Built with <a href="https://nuxtjs.org/" class="hover:text-underline text-blue-500" target="_blank">Nuxt</a>,
      <a href="https://tailwindcss.com/" class="text-blue-500" target="_blank">Tailwind CSS</a>
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
  padding: 1rem .5rem;
  border-top: 2px solid #efefef;
  margin-top: 1.5rem;
}
.copyleft {
  display:inline-block;
  transform: rotate(180deg);
}
</style>
