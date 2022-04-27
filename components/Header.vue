<template>
  <header class="flex justify-between items-center site-header dark:bg-gray-800">
    <div>
      <h1 class="my-3 text-3xl font-thin">
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
        <font-awesome-icon :icon="['fa', 'envelope']" class="fa-2x" />
      </a>
      <a
        class="float-right mx-2 text-gray-700"
        href="https://linkedin.com/in/sisir-ghimire-chettri"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        class="float-right mx-2 text-gray-700"
        href="https://github.com/tuxsisir"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
      </a>
      <a
        v-if="$colorMode.value == `dark`"
        class="float-right mx-2 text-gray-700"
        @click="$colorMode.preference = `light`"
      >
        <font-awesome-icon :icon="['fa', 'sun']" class="text-xl" />
      </a>
      <a
        v-else
        class="float-right mx-2 text-gray-700"
        @click="$colorMode.preference = `dark`"
      >
        <font-awesome-icon :icon="['fa', 'moon']" class="text-xl" />
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
  height: 55px;
  padding: 1rem .5rem;
  border-bottom: 2px solid #efefef;
  margin-bottom: .5rem;
  background: white;
}
svg:not(:root).svg-inline--fa {
    overflow: visible;
}
.svg-inline--fa.fa-w-16 {
    width: 1em;
}
.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1.5em;
    overflow: visible;
    vertical-align: -.125em;
}
</style>
