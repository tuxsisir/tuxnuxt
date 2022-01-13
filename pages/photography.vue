<template>
  <div>
    <figure>
      <img
        src="~/static/photos/coquitlam-view.jpg"
        alt="Elephant at sunset"
      >
      <figcaption>Photo taken with Samsung Galaxy Note 10 Lite</figcaption>
    </figure>
    <blockquote>
      <p>View of Coquitlam from Surrey</p>
    </blockquote>
  </div>
</template>
<script>
export default {
  name: 'TuxPhotography'
}
</script>
<style>
figure {
  position: relative;
  border: thin #c0c0c0 solid;
  padding: 5px;
  margin: auto;
}
blockquote {
  margin-top: 0.3rem;
  padding: 0.3em 1em;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-left: .25em solid #ced2d9;
  font-style: italic;
  font-weight: 400;
  color: #323e4d;
  background: 0 0;
}
figcaption {
  position: absolute;
  top: 1em;
  right: 5px;
  font-style: italic;
  color: #323e4d;
  background: #fff;
    background-clip: border-box;
  border: solid 1px #fff;
  padding: 2px;
  line-height: 2.6em;
  font-size: .8em;
  background-clip: content-box;
}
figcaption::after, figcaption::before {
  content: "\00a0 \00a0 ";
}
</style>
