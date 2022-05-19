<template>
  <div class="image-wrapper">
    <img :src="src.trace">
    <img
      class="real"
      :class="{ loaded: forceImageLoaded }"
      :src="src.src"
      @load="$event.target.className = 'real loaded'"
    >
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      forceImageLoaded: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.forceImageLoaded = true
    }, 2000)
  }
}
</script>
