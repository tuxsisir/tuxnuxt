<template>
  <header class="flex justify-between items-center site-header">
    <div>
      <h1 class="my-3 text-3xl">
        <nuxt-link to="/" class="text-blue-500">
          tuxsisir
        </nuxt-link>
      </h1>
    </div>
    <hr>
    <div>
      <a
        class="float-right mx-2 text-gray-700"
        href="mailto:samratsisir294@gmail.com"
      >
        <FontAwesomeIcon icon="fa-envelope" class-name="text-lg" />
      </a>
      <a
        class="float-right mx-2 text-gray-700"
        href="https://linkedin.com/in/sisir-ghimire-chettri"
      >
        <FontAwesomeIcon :icon="['fab', 'linkedin']" class-name="text-lg" />
      </a>
      <a
        class="float-right mx-2 text-gray-700"
        href="https://github.com/tuxsisir"
      >
        <font-awesome-icon :icon="['fab', 'github']" class-name="text-lg" />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style>
.site-header {
  left: 0;
  right: 0;
  height: 70px;
  padding: 1rem .5rem;
  border-bottom: 2px solid #efefef;
  margin-bottom: .5rem;
}
</style>
