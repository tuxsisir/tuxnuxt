<template>
  <div v-if="showAlert" class="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">WIP!</strong>
    <span class="block sm:inline">You may see some hiccups here and there because I am working on it.</span>
  </div>
</template>
<script>
export default {
  name: 'TuxAlert',
  props: {
    showAlert: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
