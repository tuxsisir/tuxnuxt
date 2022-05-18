<template>
  <div class="">
    Render Notebook
    <div style="margin:0px;padding:0px;overflow:hidden">
      <iframe src="http://localhost:5555/cookbook.html" title="Cookbook" width="100%" height="100%" />
    </div>
    <!--
    <object
      data="http://localhost:5555/cookbook.html"
      width="100%"
      type="text/html"
    />
    -->
  </div>
</template>
<script>

export default {
  name: 'NotebookPages',
  data () {
    return {
      body: ''
    }
  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      await this.$axios.$get('http://localhost:5555/cookbook.html').then((resp) => {
        this.body = resp
      })
    }
  }
}
</script>
