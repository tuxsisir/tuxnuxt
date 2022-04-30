<template>
  <div id="app" class="h-full bg-light dark:bg-gray-800">
    <div class="container mx-auto">
      <app-header />
      <Nuxt />
      <app-footer />
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter }
}
</script>
