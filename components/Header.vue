<template>
  <header
    class="flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-700 mb-3 transition ease-linear duration-200"
  >
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
        v-if="$colorMode.value == `dark`"
        class="float-right mx-2"
        @click="$colorMode.preference = `light`"
      >
        <font-awesome-icon :icon="['fa', 'bolt']" class="fa-xl text-gray-700 dark:text-amber-300" />
      </a>
      <a
        v-else
        class="float-right mx-2"
        @click="$colorMode.preference = `dark`"
      >
        <font-awesome-icon :icon="['fa', 'moon']" class="fa-xl text-purple-700 dark:text-gray-600" />
      </a>
      <a
        class="float-right mx-2"
        href="mailto:samratsisir294@gmail.com"
      >
        <font-awesome-icon :icon="['fa', 'envelope']" class="fa-xl text-gray-700 dark:text-gray-600" />
      </a>
      <a
        class="float-right mx-2"
        href="https://linkedin.com/in/sisir-ghimire-chettri"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-xl text-gray-700 dark:text-gray-600" />
      </a>
      <a
        class="float-right mx-2"
        href="https://github.com/tuxsisir"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="fa-xl text-gray-700 dark:text-gray-600" />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
