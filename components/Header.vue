<template>
  <header class="flex justify-between items-center">
    <div>
      <h1 class="my-3">
        tuxsisir
      </h1>
    </div>
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
