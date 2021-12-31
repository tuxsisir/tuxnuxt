<template>
  <div>
    <div class="container mx-auto">
      <app-header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/Header'

export default {
  name: 'DefaultLayout',
  components: { AppHeader }
}
</script>
